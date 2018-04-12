import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import H2 from '../h2';

test('default', () => {
  const jsx = (
    <H2>The Title</H2>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('noTopMargin', () => {
  const jsx = (
    <H2 noTopMargin>The Title</H2>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});

test('noBottomMargin', () => {
  const jsx = (
    <H2 noBottomMargin>The Title</H2>
  );
  expect(renderer.create(jsx).toJSON()).toMatchSnapshot();
});
