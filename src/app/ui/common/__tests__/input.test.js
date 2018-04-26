import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import snap from '../../../../lib/test-utils/snap';
import Input from '../input';

configure({ adapter: new Adapter() });

snap('snapshot text default', (
  <Input type="text" />
));

snap('snapshot text with suffix', (
  <Input type="text" suffix="Watts" />
));

test('type=tel formatting (10 digits)', () => {
  const onChange = jest.fn();
  const wrapper = mount((
    <Input type="tel" onChange={onChange} />
  ));
  wrapper.find('input').simulate('change', { target: { value: '4168885555' } });
  expect(onChange).toBeCalledWith(expect.objectContaining({
    target: {
      value: '416-888-5555',
    },
  }));
});

test('type=tel formatting (too many digits)', () => {
  const onChange = jest.fn();
  const wrapper = mount((
    <Input type="tel" onChange={onChange} />
  ));
  wrapper.find('input').simulate('change', { target: { value: '416888555511111' } });
  expect(onChange).toBeCalledWith(expect.objectContaining({
    target: {
      value: '416-888-5555',
    },
  }));
});

test('type=tel formatting (digits and non-digits)', () => {
  const onChange = jest.fn();
  const wrapper = mount((
    <Input type="tel" onChange={onChange} />
  ));
  wrapper.find('input').simulate('change', { target: { value: 'abc1234' } });
  expect(onChange).toBeCalledWith(expect.objectContaining({
    target: {
      value: '123-4',
    },
  }));
});
