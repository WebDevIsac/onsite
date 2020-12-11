import React from 'react';
import styled from '@emotion/styled';
import Hero from 'components/Hero';
import { Link } from 'react-router-dom';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 16px;
`;

const H3 = styled('h3')`
    margin-bottom: 8px;

    @media screen and (min-width: 1024px) {
        margin-bottom: 12px;
    }
`;

const Text = styled('p')`
    margin-bottom: 12px;

    @media screen and (min-width: 1024px) {
        margin-bottom: 16px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: underline;
    align-self: flex-end;

    @media screen and (min-width: 1024px) {
        align-self: flex-start;
    }
`;

const ImageWrapper = styled('div')`
    display: block;
    width: 100%;
    height: 400px;
`;

const FrontPage = () => {
    return (
        <Wrapper>
            <Hero text='OnSite skapar framgång hos individer och företag' />
            <ContentWrapper>
                <H3>Rådgivning och erfarenhet</H3>
                <Text>
                    När du anlitar OnSite så får du tillgång till en personlig rådgivare /expert med unik erfarenhet och förmåga att skapa framgång hos
                    individer och företag.
                </Text>
                <StyledLink to='/om-oss'>Läs mer om oss</StyledLink>
            </ContentWrapper>
            <ImageWrapper></ImageWrapper>
        </Wrapper>
    );
};

export default FrontPage;
