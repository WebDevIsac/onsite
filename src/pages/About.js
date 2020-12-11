import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')``;

const About = () => {
    return (
        <Wrapper>
            <h1>Om Onsite</h1>
            <p>
                När du anlitar OnSite så får du tillgång till en personlig rådgivare /expert med unik erfarenhet och förmåga att skapa framgång hos individer
                och företag. Med gedigen erfarenhet från internationella företag i högsta ledningen och fokus på strategiskt, affärsdrivet ledarskap,
                organisationsutveckling och att bygga och utveckla en stark företagskultur. Bakgrund inom Mode/ Retail och Tjänste/Service sektorn.
            </p>
            <h3>OnSite</h3>

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
        </Wrapper>
    );
};

export default About;
