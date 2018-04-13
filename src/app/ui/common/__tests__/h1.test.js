import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import H1 from '../h1';

test('snapshot default', () => {
  const jsx = (
    <H1>The Title</H1>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('snapshot noTopMargin', () => {
  const jsx = (
    <H1 noTopMargin>The Title</H1>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('snapshot noBottomMargin', () => {
  const jsx = (
    <H1 noBottomMargin>The Title</H1>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});
