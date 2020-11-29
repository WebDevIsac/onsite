import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';

const Wrapper = styled('header')`
    background-color: #ff9977;
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

    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
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
    position: absolute;
    top: 56px;
    right: 0;
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

    @media (min-width: 1024px) {
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
    font-size: 20px;

    @media (max-width: 1024px) {
        &:not(:last-of-type) {
            margin-bottom: 40px;
        }
    }

    @media (min-width: 1024px) {
        font-size: 16px;

        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #fff;
            max-width: 0px;
            transition: max-width 400ms ease;
        }

        @media (hover: hover) {
            &:hover:after {
                max-width: 100%;
            }
        }

        &:not(:last-of-type) {
            margin-right: 32px;
        }
    }
`;

const StyledLink = styled(Link)();

const Socials = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;

    @media (min-width: 1024px) {
        display: none;
    }
`;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Wrapper>
            <InnerWrapper>
                <Logo>
                    <Link to='/' onClick={() => setIsMenuOpen(false)}>
                        Onsite
                    </Link>
                </Logo>
                <HamburgerMenu className={isMenuOpen ? 'is-open' : ''} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Line />
                    <Line />
                    <Line />
                </HamburgerMenu>
                <Navbar className={isMenuOpen ? 'is-open' : ''}>
                    <Item>
                        <StyledLink to='/' onClick={() => setIsMenuOpen(false)}>
                            Hem
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to='/tjanster' onClick={() => setIsMenuOpen(false)}>
                            Våra tjänster
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to='/om-oss' onClick={() => setIsMenuOpen(false)}>
                            Om oss
                        </StyledLink>
                    </Item>
                    <Item>
                        <StyledLink to='/kontakt' onClick={() => setIsMenuOpen(false)}>
                            Kontakt
                        </StyledLink>
                    </Item>
                    <Socials>
                        <InstagramIcon width='40px' height='40px' />
                        <LinkedInIcon width='40px' height='40px' />
                        <FacebookIcon width='40px' height='40px' />
                    </Socials>
                </Navbar>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Header;
