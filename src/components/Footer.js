import React from 'react';
import styled from '@emotion/styled';
import LinkComponent from 'components/LinkComponent';
import LinkedInIcon from 'components/icons/LinkedInIcon';
import InstagramIcon from 'components/icons/InstagramIcon';
import FacebookIcon from 'components/icons/FacebookIcon';

const Footer = () => {
    const Wrapper = styled('div')`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f2cca7;
        padding: 32px 16px;

        @media screen and (min-width: 768px) {
            flex-direction: row;
            justify-content: space-around;
            padding: 64px 16px;
        }
    `;

    const Row = styled('div')`
        display: flex;
        align-items: center;
        justify-content: space-around;
    `;

    const Column = styled(Row)`
        flex-direction: column;
    `;

    const Logo = styled('div')`
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        font-weight: 500;
        min-width: 200px;
        width: 30%;
        max-width: 240px;
        margin-bottom: 32px;

        & > span:first-of-type {
            font-size: 56px;
            line-height: 60px;
        }

        & > div {
            display: block;
            width: 100%;
            height: 3px;
            background-color: #fff;
        }

        & > span:last-of-type {
            font-size: 16px;
            line-height: 20px;
            font-variant-caps: all-small-caps;
        }

        @media screen and (min-width: 768px) {
            & > span:first-of-type {
                font-size: 70px;
                line-height: 78px;
            }

            & > span:last-of-type {
                font-size: 18px;
                line-height: 22px;
            }
        }
    `;

    const ContactWrapper = styled('div')`
        display: block;
        padding: 12px;
        border: 2px solid #fff;
        color: #fff;
        border-radius: 4px;
        margin-bottom: 32px;

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

    const Socials = styled('div')`
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: auto;

        & > a {
            transition: opacity 200ms ease;
        }

        & > a:hover {
            opacity: 0.7;
        }
    `;

    return (
        <Wrapper>
            <Logo>
                <span>Onsite</span>
                <div />
                <span>international search</span>
            </Logo>
            <Column>
                <ContactWrapper>
                    <LinkWrapper>
                        <Span>Email: </Span>
                        <LinkComponent isExternal mobileUnderline isReversed toUrl='mailto:helene.kry@onsite.se' lineColor='#fff' target='_blank'>
                            helene.kry@onsite.se
                        </LinkComponent>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Span>Telefon: </Span>
                        <LinkComponent isExternal mobileUnderline isReversed toUrl='tel:+46703743345' lineColor='#fff' target='_blank'>
                            +46703743345
                        </LinkComponent>
                    </LinkWrapper>
                </ContactWrapper>
                <Socials>
                    <a target='_blank' href='https://www.instagram.com/helenekry/'>
                        <InstagramIcon width='40px' height='40px' />
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/helene-kry-9798a047/'>
                        <LinkedInIcon width='40px' height='40px' />
                    </a>
                    <a target='_blank' href='https://www.facebook.com/helene.kry'>
                        <FacebookIcon width='40px' height='40px' />
                    </a>
                </Socials>
            </Column>
        </Wrapper>
    );
};

export default Footer;
