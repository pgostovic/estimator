import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../button';

test('no theme', () => {
  const jsx = (
    <Button>Click Me</Button>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('green', () => {
  const jsx = (
    <Button theme="green">Click Me</Button>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('orange-gradient', () => {
  const jsx = (
    <Button theme="orange-gradient">Click Me</Button>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});
