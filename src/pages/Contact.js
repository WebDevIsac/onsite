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

const ContactWrapper = styled('div')`
    display: block;
    max-width: 320px;
    padding: 12px;
    border: 2px solid #f2cca7;
    border-radius: 4px;
    margin: 12px 0 20px;

    @media screen and (min-width: 1024px) {
        padding: 24px;
    }
`;

const LinkWrapper = styled('div')`
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
        margin-bottom: 12px;
    }
`;

const Span = styled('span')`
    margin-right: 8px;
`;

const Contact = () => {
    return (
        <Wrapper>
            <Hero text='Är du sugen på en ny utmaning?' />
            <ContentWrapper>
                <H1>Kontakt</H1>

                <ContactWrapper>
                    <LinkWrapper>
                        <Span>Email: </Span>
                        <LinkComponent isExternal mobileUnderline isReversed toUrl='mailto:helene.kry@onsite.se' lineColor='#000' target='_blank'>
                            helene.kry@onsite.se
                        </LinkComponent>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Span>Telefon: </Span>
                        <LinkComponent isExternal mobileUnderline isReversed toUrl='tel:+46703743345' lineColor='#000' target='_blank'>
                            +46703743345
                        </LinkComponent>
                    </LinkWrapper>
                </ContactWrapper>

                <Text>
                    Är du sugen på en ny utmaning? Tag kontakt med OnSite så får du en personlig kartläggning och rådgivning om vad för typ av bolag och tjänst
                    som matchar dig bäst.
                </Text>

                <Text>
                    Det handlar om möten, människor och relationer. Genom att hitta rätt talanger, arbeta fram den bäst lämpade organisationen efter de
                    förutsättningar som råder samt att bygga och utveckla ledarskapet och företagskulturen så kommer vi att kunna kreera hållbara och lönsamma
                    företag. OnSite arbetar med fokus, engagemang och hög tillgänglighet.
                </Text>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Contact;
