import React from 'react';
import styled from '@emotion/styled';
import Hero from '../components/Hero';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FrontPage = () => {
    return (
        <Wrapper>
            <Hero />
        </Wrapper>
    );
};

export default FrontPage;
