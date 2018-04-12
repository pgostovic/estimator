import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '../input';

test('text default', () => {
  const jsx = (
    <Input type="text" />
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('text with suffix', () => {
  const jsx = (
    <Input type="text" suffix="Watts" />
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});
