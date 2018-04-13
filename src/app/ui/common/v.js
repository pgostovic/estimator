import PropTypes from 'prop-types';
import styled from '../../../lib/styled';

const V = styled.div`
  height: ${props => props.px || 10}px;
`;

V.propTypes = {
  px: PropTypes.number,
};

V.defaulProps = {
  px: null,
};

export default V;
