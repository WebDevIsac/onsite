import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LinkComponent from 'components/LinkComponent';
import LinkedInIcon from 'components/icons/LinkedInIcon';
import InstagramIcon from 'components/icons/InstagramIcon';
import FacebookIcon from 'components/icons/FacebookIcon';

const Wrapper = styled('header')`
    background-color: #ff9977;
    position: fixed;
    width: 100%;
`;

const InnerWrapper = styled('div')`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1980px;
    margin: 0 auto;
    padding: 16px;
    height: 56px;

    @media screen and (min-width: 1024px) {
        height: 72px;
    }
`;

const Logo = styled('div')`
    font-size: 24px;
    color: #fff;
`;

const HamburgerMenu = styled('button')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30px;
    height: 100%;

    &.is-open > span {
        &:first-of-type {
            transform: rotateZ(-45deg);
        }

        &:nth-of-type(2) {
            opacity: 0;
        }

        &:last-of-type {
            transform: rotateZ(45deg);
        }
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const Line = styled('span')`
    width: 100%;
    height: 3px;
    border-radius: 25px;
    background-color: #fff;
    transition: transform 300ms ease, opacity 200ms ease;
    transform-origin: right;
    opacity: 1;
`;

const Navbar = styled('nav')`
    position: fixed;
    top: 56px;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: calc(100vh - 56px);
    max-width: 500px;
    padding: 64px 32px 32px;
    transform: translateX(100%);
    background-color: #ff9977;
    transition: transform 400ms ease;

    &.is-open {
        transform: translateX(0);
    }

    @media screen and (min-width: 1024px) {
        position: initial;
        transform: translateX(0);
        transition: none;
        flex-direction: row;
        justify-content: flex-end;
        height: 100%;
        width: 100%;
        padding: 0;
    }
`;

const Item = styled('div')`
    color: #fff;
    font-size: 20px;

    @media screen and (max-width: 1024px) {
        &:not(:last-of-type) {
            margin-bottom: 40px;
        }
    }

    @media screen and (min-width: 1024px) {
        font-size: 16px;

        &:not(:last-of-type) {
            margin-right: 32px;
        }
    }
`;

const Socials = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const MobileMenuBackground = styled('div')`
    position: absolute;
    top: 56px;
    right: 0;
    left: 0;
    z-index: 1;
    height: calc(100vh - 56px);
    pointer-events: none;
    background-color: #000;
    transition: opacity 200ms ease;
    opacity: 0;

    &.is-open {
        pointer-events: auto;
        opacity: 0.4;
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const HeaderFiller = styled('div')`
    height: 56px;
    width: 100%;

    @media screen and (min-width: 1024px) {
        height: 72px;
    }
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (shouldOpen = true) => {
        if (!isMenuOpen && !shouldOpen) {
            return;
        }

        let body;
        if (document !== undefined) {
            body = document.querySelector('body');
        } else {
            return;
        }

        if (isMenuOpen) {
            setIsMenuOpen(false);
            body.style.overflow = 'auto';
        } else {
            setIsMenuOpen(true);
            body.style.overflow = 'hidden';
        }
    };

    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    <Logo>
                        <Link to='/' onClick={() => toggleMenu(false)}>
                            Onsite
                        </Link>
                    </Logo>
                    <HamburgerMenu className={isMenuOpen ? 'is-open' : ''} onClick={toggleMenu}>
                        <Line />
                        <Line />
                        <Line />
                    </HamburgerMenu>
                    <Navbar className={isMenuOpen ? 'is-open' : ''}>
                        <Item>
                            <LinkComponent toUrl='/' onClick={toggleMenu} withAnimation>
                                Hem
                            </LinkComponent>
                        </Item>
                        <Item>
                            <LinkComponent toUrl='/tjanster' onClick={toggleMenu} withAnimation>
                                Våra tjänster
                            </LinkComponent>
                        </Item>
                        <Item>
                            <LinkComponent toUrl='/om-oss' onClick={toggleMenu} withAnimation>
                                Om oss
                            </LinkComponent>
                        </Item>
                        <Item>
                            <LinkComponent toUrl='/kontakt' onClick={toggleMenu} withAnimation>
                                Kontakt
                            </LinkComponent>
                        </Item>
                        <Socials>
                            <InstagramIcon width='40px' height='40px' />
                            <LinkedInIcon width='40px' height='40px' />
                            <FacebookIcon width='40px' height='40px' />
                        </Socials>
                    </Navbar>
                    <MobileMenuBackground className={isMenuOpen ? 'is-open' : ''} onClick={toggleMenu} />
                </InnerWrapper>
            </Wrapper>
            <HeaderFiller />
        </>
    );
};

export default Header;
