import React from 'react';
import PropTypes from 'prop-types';

import { parseUrl } from './url';


const routers = {};

const match = (path, routerPath) => {
  const paramNames = [];
  const comps = routerPath.split('/').map(comp => {
    if (comp.charAt(0) === ':') {
      paramNames.push(comp.substring(1));
      return '([^/]*)';
    }
    return comp;
  });

  const params = {};
  const m = new RegExp(`^${comps.join('\\/')}$`).exec(path);
  if (m) {
    m.slice(1).forEach((val, i) => {
      params[paramNames[i]] = val;
    });
    return params;
  }
  return null;
};

export class Router extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    name: 'default',
  };

  static get(name = 'default') {
    return routers[name];
  }

  constructor(props) {
    super(props);

    const { name } = props;

    routers[name] = this;
  }

  state = { history: [] };

  push(path) {
    const { history } = this.state;
    this.setState({ history: [...history, path] });
  }

  pop() {
    const { history } = this.state;
    this.setState({ history: history.slice(0, history.length - 1) });
  }

  replace(path) {
    const { history } = this.state;
    this.setState({ history: [...history.slice(0, history.length - 1), path] });
  }

  render() {
    const { children } = this.props;
    const { history } = this.state;

    const url = parseUrl(history[history.length - 1]);
    const path = url.pathname;

    return (children instanceof Array ? children : [children]).map(child => {
      const { props: { path: routePath, render } } = child;

      const matchParams = match(path, routePath);
      if (matchParams) {
        if (render) {
          return render({ ...matchParams, params: url.params });
        }
        return child;
      }
      return null;
    }).filter(n => n).map((n, i) => ({ ...n, key: n.key || i }));
  }
}

export const Route = ({ children }) => children;

Route.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
  render: PropTypes.func,
};

Route.defaultProps = {
  path: '/',
  children: null,
  render: null,
};

/**
 * Shortcut for getting a reference to the default Router instance.
 */
export const router = Router.get;
