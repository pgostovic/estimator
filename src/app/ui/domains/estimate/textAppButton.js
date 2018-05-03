import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import styled from '../../../../lib/styled';
import Button from '../../common/button';
import Input from '../../common/input';
import { colorWhite, colorBlack, colorGrey, colorDarkBlack, fontWeightThin } from '../../style/variables';

const Form = styled.form`
  position: relative;

  > button {
    border-radius: 0 0 5px 5px;
    box-shadow: 0 0 12px 0 ${colorDarkBlack.alpha(0.1)};
  }

  > div {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    left: 0;
    bottom: 45px;
    padding: 10px 20px;
    font-size: 16px;
    color: ${colorBlack};
    background-color: ${colorWhite};
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 12px 0 ${colorDarkBlack.alpha(0.1)};

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: calc(50% - 9px);
      width: 18px;
      height: 18px;
      transform: rotate(45deg);
      transform-origin: center;
      background-color: ${colorWhite};
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 15px;
  border: none;
  background-color: transparent;
  color: ${colorGrey};
  font-size: 25px;
  padding: 0;
  font-weight: ${fontWeightThin};
  outline: 0;
  cursor: pointer;
`;

class TextAppButton extends React.Component {
  static propTypes = {
    lead: PropTypes.objectOf(PropTypes.string).isRequired,
    onLeadChange: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
  };

  state = { showForm: false };

  @autobind
  confirm(event) {
    event.preventDefault();

    this.setState({ showForm: false });
  }

  render() {
    const { showForm } = this.state;
    const { lead: { phone, phoneOverride }, onLeadChange, onDone } = this.props;
    const phoneVal = phoneOverride === null ? phone : phoneOverride || '';

    return (
      <span>
        {showForm ?
          <Form onSubmit={this.confirm}>
            <Button w={205} theme="orange-gradient" onClick={onDone}>
              Confirm
            </Button>
            <div>
              My number is
              <Input type="tel" value={phoneVal} onChange={e => onLeadChange('phoneOverride', e.target.value)} />
              <CloseButton onClick={() => this.setState({ showForm: false })}>&times;</CloseButton>
            </div>
          </Form>
        :
          <Button w={205} theme="orange-gradient" onClick={() => this.setState({ showForm: true })}>
            Text me the app
          </Button>
        }
      </span>);
  }
}

export default TextAppButton;
