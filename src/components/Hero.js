import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import img from 'assets/images/image1.png';

const Wrapper = styled('div')`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f3cca7;
    padding: 64px;
    margin-bottom: 32px;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Heading = styled('h1')`
    font-size: 2.2em;
    line-height: 1.5em;
    color: #fff;
    text-align: center;

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
