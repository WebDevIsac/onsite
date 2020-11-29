import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    padding: 16px;
    margin-bottom: 32px;
`;

const Heading = styled('h1')`
    font-size: 2.2em;
    line-height: 1.5em;

    @media screen and (min-width: 1024px) {
        font-size: 3em;
    }
`;

const Hero = () => {
    return (
        <Wrapper>
            <Heading>OnSite skapar framgång hos individer och företag</Heading>
        </Wrapper>
    );
};

Hero.propTypes = {};

export default Hero;
