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
`;

const H2 = styled('h2')`
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

const Column = styled('div')`
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
        margin-bottom: 32px;
    }
`;

const FrontPage = () => {
    return (
        <Wrapper>
            <Hero text='OnSite skapar framgång hos individer och företag' />
            <ContentWrapper>
                <H2>Rådgivning och erfarenhet</H2>
                <Column>
                    <Text>
                        När du anlitar OnSite så får du tillgång till en personlig rådgivare /expert med unik erfarenhet och förmåga att skapa framgång hos
                        individer och företag.
                    </Text>
                    <LinkComponent toUrl='/om-oss' isReversed withAnimation mobileUnderline lineColor='#000'>
                        Läs mer om oss
                    </LinkComponent>
                </Column>
                <H2>Kontakt oss</H2>
                <Column>
                    <Text>
                        Är du sugen på en ny utmaning? Tag kontakt med OnSite så får du en personlig kartläggning och rådgivning om vad för typ av bolag och
                        tjänst som matchar dig bäst.
                    </Text>
                    <LinkComponent toUrl='/kontakt' isReversed withAnimation mobileUnderline lineColor='#000'>
                        Ta mig till kontaktsidan
                    </LinkComponent>
                </Column>
            </ContentWrapper>
        </Wrapper>
    );
};

export default FrontPage;
