import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

export const snap = (title, jsx) => {
  test(title, () => {
    expect(TestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
};
