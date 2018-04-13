import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import V from '../v';

test('snapshot default', () => {
  const jsx = (
    <V />
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('snapshot px of 20', () => {
  const jsx = (
    <V px={20} />
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});
