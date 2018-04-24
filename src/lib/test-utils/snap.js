import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

const snap = (title, jsx) => {
  test(title, () => {
    expect(TestRenderer.create(jsx).toJSON()).toMatchSnapshot();
  });
};

export default snap;
