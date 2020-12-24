import React from 'react';
import styled from '@emotion/styled';
import Hero from 'components/Hero';
import LinkComponent from 'components/LinkComponent';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 16px;
    max-width: 1440px;

    & > div:after {
        background-color: #000;
    }
`;

const H1 = styled('h1')`
    margin-bottom: 8px;

    @media screen and (min-width: 1024px) {
        margin-bottom: 12px;
    }
`;

const Text = styled('p')`
    margin-bottom: 12px;
    font-size: 16px;

    @media screen and (min-width: 1024px) {
        margin-bottom: 16px;
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
                <H1>Rådgivning och erfarenhet</H1>
                <Text>
                    När du anlitar OnSite så får du tillgång till en personlig rådgivare /expert med unik erfarenhet och förmåga att skapa framgång hos
                    individer och företag.
                </Text>
                <LinkComponent toUrl='/om-oss' isReversed withAnimation>
                    Läs mer om oss
                </LinkComponent>
            </ContentWrapper>
            <ImageWrapper></ImageWrapper>
        </Wrapper>
    );
};

export default FrontPage;
