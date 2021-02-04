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

const Services = () => {
    return (
        <Wrapper>
            <Hero text='Organisation&shy;sutveckling / rådgivning – start up eller förändring' />
            <ContentWrapper>
                <H1>Tjänster</H1>
                <Text>
                    <strong>Interim uppdrag</strong> - ger stor flexibilitet om du snabbt behöver få in rätt kompetens under en begränsad period. Vi kan erbjuda
                    effektiva interimslösningar. Vi löser interimskonsulter både på chefs- och specialistnivå.
                </Text>
                <Text>
                    <strong>Organisationsutveckling / rådgivning</strong> – start up eller förändring? Vi kan hjälpa er med kartläggning , processer,
                    prioriteringar , riskbedömning och kommunikation.
                </Text>
                <Text>
                    <strong>Mentor / coach management</strong> – behövs en coach/ mentor? Vi löser chefsrådgivning under löpande basis alt kortare perioder.
                </Text>
                <Text>
                    <strong>Chefs rekrytering</strong> – med ett stort nätverk, djupgående analys och kvalitet i processen, anpassat efter ert företag löser vi
                    era chefs och specialist rekryteringar HR Stöd- kan erbjuda stöd i HR strategier och processer, employer branding , culture, arbetsrätt,
                    svåra samtal, förhandlingar, avtals formuleringar.
                </Text>
                <Text>
                    <strong>Analyser / Second Opinion</strong> - Om ni har genomfört en rekryteringsprocess själva och vill ha hjälp i bedömningen av era
                    slutkandidater kan vi ge stöd genom en second opinion. Genom djupintervjuer, tester och referenstagning säkerställer vi på ett effektivt
                    sätt kvalitén i rekryteringar och interna befordringar.
                </Text>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Services;
