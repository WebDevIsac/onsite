import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LinkedInIcon from 'components/icons/LinkedInIcon';
import InstagramIcon from 'components/icons/InstagramIcon';
import FacebookIcon from 'components/icons/FacebookIcon';

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
    background-color: #f2cca7;
    transition: transform 400ms ease;

    &.is-open {
        transform: translateX(0);
    }
`;

const Item = styled('div')`
    color: #fff;
    font-size: 20px;
    &:not(:last-of-type) {
        margin-bottom: 40px;
    }
`;

const Socials = styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;
    margin-bottom: 128px;
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
`;

const Header = ({ isMenuOpen, toggleMenu }) => {
    return (
        <>
            <HamburgerMenu className={isMenuOpen ? 'is-open' : ''} onClick={toggleMenu}>
                <Line />
                <Line />
                <Line />
            </HamburgerMenu>
            <Navbar className={isMenuOpen ? 'is-open' : ''}>
                <Item>
                    <Link to='/' onClick={toggleMenu}>
                        Go to Start
                    </Link>
                </Item>
                <Item>
                    <Link to='/services' onClick={toggleMenu}>
                        Our services
                    </Link>
                </Item>
                <Item>
                    <Link to='/about' onClick={toggleMenu}>
                        About
                    </Link>
                </Item>
                <Item>
                    <Link to='/contact' onClick={toggleMenu}>
                        Contact
                    </Link>
                </Item>
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
            </Navbar>
            <MobileMenuBackground className={isMenuOpen ? 'is-open' : ''} onClick={toggleMenu} />
        </>
    );
};

export default Header;
