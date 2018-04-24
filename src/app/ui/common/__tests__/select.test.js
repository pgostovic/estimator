import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import snap from '../../../../lib/test-utils/snap';
import Select from '../select';

configure({ adapter: new Adapter() });

snap('snapshot default', (
  <Select>
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </Select>
));

snap('snapshot value set to option text', (
  <Select value="One">
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </Select>
));

snap('snapshot value set to option value', (
  <Select value="deux">
    <option value="un">One</option>
    <option value="deux">Two</option>
    <option value="trois">Three</option>
  </Select>
));

snap('snapshot placeholder', (
  <Select placeholder="Choose">
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </Select>
));

test('onChange called when value changed', () => {
  const onChange = jest.fn();
  const wrapper = mount((
    <Select placeholder="Choose" onChange={onChange}>
      <option value="un">One</option>
      <option value="deux">Two</option>
      <option value="trois">Three</option>
    </Select>
  ));
  wrapper.find('select').simulate('change', { target: { value: 'deux' } });
  expect(onChange).toBeCalledWith(expect.objectContaining({
    target: {
      value: 'deux',
    },
  }));
});

test('placeholder removed when value changed', () => {
  const onChange = jest.fn();
  const wrapper = mount((
    <Select placeholder="Choose" onChange={onChange}>
      <option value="un">One</option>
      <option value="deux">Two</option>
      <option value="trois">Three</option>
    </Select>
  ));
  expect(wrapper.find('option.ph')).toHaveLength(1);
  wrapper.find('select').simulate('change', { target: { value: 'deux' } });
  expect(wrapper.find('option.ph')).toHaveLength(0);
});

test('placeholder not there when value set', () => {
  const wrapper = mount((
    <Select placeholder="Choose" value="trois">
      <option value="un">One</option>
      <option value="deux">Two</option>
      <option value="trois">Three</option>
    </Select>
  ));
  expect(wrapper.find('option.ph')).toHaveLength(0);
});
