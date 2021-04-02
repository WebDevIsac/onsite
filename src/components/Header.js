import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Wrapper = styled('header')`
    background-color: #f2cca7;
    position: fixed;
    z-index: 10;
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
        padding: 0 16px;
    }
`;

const Logo = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    & > * {
        display: none;
    }

    & > span:first-of-type {
        display: initial;
        font-size: 30px;
        line-height: 1em;
    }

    @media screen and (min-width: 1024px) {
        & > * {
            font-weight: 500;
            display: initial;
        }

        & > span:first-of-type {
            font-size: 32px;
            line-height: 36px;
        }

        & > div {
            display: block;
            width: 100%;
            height: 3px;
            background-color: #fff;
        }

        & > span:last-of-type {
            font-variant-caps: all-small-caps;
        }
    }
`;

const MobileWrapper = styled('div')`
    display: block;
    height: 100%;

    @media screen and (min-width: 1024px) {
        display: none;
    }
`;

const DesktopWrapper = styled('div')`
    display: none;
    height: 100%;

    @media screen and (min-width: 1024px) {
        display: block;
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
    const wrapperEl = useRef(null);

    const toggleMenu = (shouldOpen = true) => {
        if (!isMenuOpen && !shouldOpen) {
            return;
        }

        let body;
        if (document !== undefined && wrapperEl.current.offsetWidth < 1024) {
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
            <Wrapper ref={wrapperEl}>
                <InnerWrapper>
                    <Link to='/' onClick={() => toggleMenu(false)}>
                        <Logo>
                            <span>OnSite</span>
                            <div />
                            <span>international search</span>
                        </Logo>
                    </Link>
                    <MobileWrapper>
                        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    </MobileWrapper>
                    <DesktopWrapper>
                        <DesktopMenu />
                    </DesktopWrapper>
                </InnerWrapper>
            </Wrapper>
            <HeaderFiller />
        </>
    );
};

export default Header;
