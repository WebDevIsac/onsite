import React from 'react';
import styled from '@emotion/styled';
import Hero from 'components/Hero';

const Wrapper = styled('div')``;

const Services = () => {
    return (
        <Wrapper>
            <Hero text='Organisationsutveckling / rådgivning – start up eller förändring' />
            <h1>Tjänster</h1>
            <p>
                Interim uppdrag - ger stor flexibilitet om du snabbt behöver få in rätt kompetens under en begränsad period. Vi kan erbjuda effektiva
                interimslösningar. Vi löser interimskonsulter både på chefs- och specialistnivå. Organisationsutveckling / rådgivning – start up eller
                förändring? Vi kan hjälpa er med kartläggning , processer, prioriteringar , riskbedömning och kommunikation Mentor / coach management – behövs
                en coach/ mentor? Vi löser chefsrådgivning under löpande basis alt kortare perioder. Chefs rekrytering – med ett stort nätverk, djupgående
                analys och kvalitet i processen, anpassat efter ert företag löser vi era chefs och specialist rekryteringar HR Stöd- kan erbjuda stöd i HR
                strategier och processer, employer branding , culture, arbetsrätt, svåra samtal, förhandlingar, avtals formuleringar, Analyser / Second Opinion
                - Om ni har genomfört en rekryteringsprocess själva och vill ha hjälp i bedömningen av era slutkandidater kan vi ge stöd genom en second
                opinion. Genom djupintervjuer, tester och referenstagning säkerställer vi på ett effektivt sätt kvalitén i rekryteringar och interna
                befordringar.
            </p>
        </Wrapper>
    );
};

export default Services;
