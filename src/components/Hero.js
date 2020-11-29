import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
    width: 100%;
    height: 30vh;
    align-self: left;
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled('div')`
    width: 80%;
    height: 100%;
    background-image: url('https://via.placeholder.com/200x150');
    background-repeat: no-repeat;
    background-size: cover;
`;

const Hero = () => {
    return (
        <Wrapper>
            <ImageWrapper></ImageWrapper>
        </Wrapper>
    );
};

Hero.propTypes = {};

export default Hero;
