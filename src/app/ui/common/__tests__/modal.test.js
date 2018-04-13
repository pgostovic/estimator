import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { snap } from '../../../../lib/test-utils';
import Modal from '../modal';

configure({ adapter: new Adapter() });

snap('snapshot default', (
  <Modal>
    <div>Some stuff</div>
  </Modal>
));

test('onClose called when background clicked', () => {
  const onClose = jest.fn();
  const wrapper = mount((
    <Modal onClose={onClose}>
      <div>Some stuff</div>
    </Modal>
  ));
  wrapper.simulate('click');
  expect(onClose).toBeCalled();
});

test('onClose called when close button clicked', () => {
  const onClose = jest.fn();
  const wrapper = mount((
    <Modal onClose={onClose}>
      <div>Some stuff</div>
    </Modal>
  ));
  wrapper.find('button').simulate('click');
  expect(onClose).toBeCalled();
});

test('onClose NOT called when content clicked', () => {
  const onClose = jest.fn();
  const wrapper = mount((
    <Modal onClose={onClose}>
      <div className="content">Some stuff</div>
    </Modal>
  ));
  wrapper.find('.content').simulate('click');
  expect(onClose).not.toBeCalled();
});
