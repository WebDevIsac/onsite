import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const SVG = styled('svg')();

SVG.propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    viewBox: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
    xmlns: PropTypes.string,
};

SVG.defaultProps = {
    xmlns: 'http://www.w3.org/2000/svg',
};

export default SVG;
