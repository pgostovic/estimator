import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import 'jest-styled-components';
import Modal from '../modal';

configure({ adapter: new Adapter() });

test('snapshot default', () => {
  const jsx = (
    <Modal>
      <div>Some stuff</div>
    </Modal>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('onClose called when background clicked', () => {
  const onClose = jest.fn();
  const jsx = (
    <Modal onClose={onClose}>
      <div>Some stuff</div>
    </Modal>
  );
  const wrapper = mount(jsx);
  wrapper.simulate('click');
  expect(onClose).toBeCalled();
});

test('onClose called when close button clicked', () => {
  const onClose = jest.fn();
  const jsx = (
    <Modal onClose={onClose}>
      <div>Some stuff</div>
    </Modal>
  );
  const wrapper = mount(jsx);
  wrapper.find('button').simulate('click');
  expect(onClose).toBeCalled();
});

test('onClose NOT called when content clicked', () => {
  const onClose = jest.fn();
  const jsx = (
    <Modal onClose={onClose}>
      <div className="content">Some stuff</div>
    </Modal>
  );
  const wrapper = mount(jsx);
  wrapper.find('.content').simulate('click');
  expect(onClose).not.toBeCalled();
});
