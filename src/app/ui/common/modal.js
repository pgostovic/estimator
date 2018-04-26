import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import styled from '../../../lib/styled';

import { colorDarkBlack, colorWhite, colorGrey, fontWeightThin } from '../style/variables';


const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colorDarkBlack.alpha(0.85)};
`;

const Foreground = styled.div`
  position: relative;
  background-color: ${colorWhite};
  padding: 0;
  height: 100vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 30px;
  border: none;
  background-color: transparent;
  color: ${colorGrey};
  font-size: 46px;
  padding: 0;
  font-weight: ${fontWeightThin};
  outline: 0;
  cursor: pointer;
`;

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    onClose: null,
  };

  componentDidMount() {
    window.document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.onKeyDown);
  }

  @autobind
  onKeyDown(event) {
    const { onClose } = this.props;

    if (event.keyCode === 27) {
      onClose();
    }
  }

  render() {
    const { children, onClose } = this.props;

    return (
      <Background onClick={e => onClose && e.target === e.currentTarget && onClose(e)}>
        <Foreground>
          {children}
          {onClose && <CloseButton onClick={onClose}>&times;</CloseButton>}
        </Foreground>
      </Background>
    );
  }
}

export default Modal;
