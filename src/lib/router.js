import React from 'react';
import PropTypes from 'prop-types';


const routers = {};

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

    const path = history[history.length - 1];

    return (children instanceof Array ? children : [children]).find(child => {
      if (path) {
        return child.props.path === path;
      }
      return child.props.index;
    }) || null;
  }
}


export const Route = ({ children }) => children;

Route.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node,
  index: PropTypes.bool,
};

Route.defaultProps = {
  index: false,
  children: null,
};


/**
 * Shortcut for getting a reference to the default Router instance.
 */
export const router = Router.get;
