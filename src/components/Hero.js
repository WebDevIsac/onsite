import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import img from 'assets/images/main.jpg';

const Wrapper = styled('div')`
    width: 100%;
    height: 60vh;
    /* max-height: 500px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f3cca7;
    padding: 16px;
    margin-bottom: 32px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 35% 50%;

    @media screen and (min-width: 768px) {
        background-position: 50% 50%;
        padding: 64px;
    }
`;

const Heading = styled('h1')`
    font-size: 2.2em;
    line-height: 1.5em;
    color: #fff;
    text-align: center;
    width: 100%;

    @media screen and (min-width: 1024px) {
        font-size: 3em;
    }
`;

const Hero = ({ text }) => {
    return (
        <Wrapper>
            <Heading>{text}</Heading>
        </Wrapper>
    );
};

Hero.propTypes = {};

export default Hero;
