import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import P from '../p';

test('snapshot default', () => {
  const jsx = (
    <P>Some text...</P>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('snapshot noTopMargin', () => {
  const jsx = (
    <P noTopMargin>Some text...</P>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('snapshot noBottomMargin', () => {
  const jsx = (
    <P noBottomMargin>Some text...</P>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});
