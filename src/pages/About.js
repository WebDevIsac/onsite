import React from 'react';
import styled from '@emotion/styled';
import Hero from 'components/Hero';

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

const About = () => {
    return (
        <Wrapper>
            <Hero text='Få tillgång till en personlig rådgivare med unik erfarenhet' />
            <ContentWrapper>
                <H1>Om oss</H1>
                <Text>
                    När du anlitar OnSite så får du tillgång till en personlig rådgivare /expert med unik erfarenhet och förmåga att skapa framgång hos
                    individer och företag. Med gedigen erfarenhet från internationella företag i högsta ledningen och fokus på strategiskt, affärsdrivet
                    ledarskap, organisationsutveckling och att bygga och utveckla en stark företagskultur. Bakgrund inom Mode/ Retail och Tjänste/Service
                    sektorn.
                </Text>

                <ul>
                    <li>30 års ledarerfarenhet</li>
                    <li>Mer än 20 års Search/ Rekrytering Chefer/Specialister</li>
                    <li>Mentor Coach Management</li>
                    <li>10 års erfarenhet av organisations utveckling </li>
                    <li>Internationell erfarenhet</li>
                    <li>Erfarenhet från Entreprenörsbolag, familjebolag och Investment ägda bolag</li>
                    <li>100 % fokus på ert företags behov</li>
                    <li>Flexibilitet</li>
                </ul>
            </ContentWrapper>
        </Wrapper>
    );
};

export default About;
