import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LinkedInIcon from 'components/icons/LinkedInIcon';
import InstagramIcon from 'components/icons/InstagramIcon';
import FacebookIcon from 'components/icons/FacebookIcon';

const Navbar = styled('nav')`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #f2cca7;
    height: 100%;
    width: 100%;
`;

const Item = styled('div')`
    color: #fff;
    font-size: 16px;
    position: relative;

    &:not(:last-of-type) {
        margin-right: 32px;
    }

    &:hover > div {
        max-height: 200px;
    }
`;

const Dropdown = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2cca7;
    max-height: 0%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 40px;
    left: -60%;
    right: -60%;
    transition: max-height 400ms ease;
`;

const DropdownLink = styled('div')`
    padding: 16px 0;
    height: 100%;
`;

const Span = styled('span')`
    cursor: default;
`;

const Header = () => {
    return (
        <Navbar>
            <Item>
                <Link to='/'>Go to Start</Link>
            </Item>
            <Item>
                <Span>Our services</Span>
                <Dropdown>
                    <DropdownLink>
                        <Link to='/executive'>Executive Search</Link>
                    </DropdownLink>
                    <DropdownLink>
                        <Link to='/management'>Management consultant</Link>
                    </DropdownLink>
                    <DropdownLink>
                        <Link to='/interim'>Interim Solutions</Link>
                    </DropdownLink>
                </Dropdown>
            </Item>
            <Item>
                <Link to='/about'>About</Link>
            </Item>
            <Item>
                <Link to='/contact'>Contact</Link>
            </Item>
        </Navbar>
    );
};

export default Header;
