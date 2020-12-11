import React from 'react';
import styled from '@emotion/core';

const Wrapper = styled('div')``;

const Contact = () => {
    return (
        <Wrapper>
            <h1>Kontakt</h1>
            <p>
                Är du sugen på en ny utmaning? Tag kontakt med OnSite så får du en personlig kartläggning och rådgivning om vad för typ av bolag och tjänst som
                matchar dig bäst.
            </p>

            <p>
                Det handlar om möten, människor och relationer. Genom att hitta rätt talanger, arbeta fram den bäst lämpade organisationen efter de
                förutsättningar som råder samt att bygga och utveckla ledarskapet och företagskulturen så kommer vi att kunna kreera hållbara och lönsamma
                företag. OnSite arbetar med fokus, engagemang och hög tillgänglighet.
            </p>
        </Wrapper>
    );
};

export default Contact;
