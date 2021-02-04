import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const LinkWrapper = styled('div')`
    color: inherit;
    width: fit-content;
    position: relative;
    line-height: 1.2em;

    &.mobile-underline {
        text-decoration: underline;
    }

    @media screen and (hover: hover) {
        &.mobile-underline {
            text-decoration: none;
        }

        &:after {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            display: block;
            height: 2px;
            background-color: ${prop => prop.lineColor};
            width: 100%;
            transition: max-width 300ms ease;
            max-width: 0px;
        }

        &.is-reversed:after {
            max-width: 100%;
            left: initial;
            right: 0;
        }

        &:hover:after {
            max-width: 100%;
        }

        &.is-reversed:hover:after {
            max-width: 0px;
        }
    }
`;

const LinkComponent = ({ children, isReversed, toUrl, handleClick, mobileUnderline, lineColor = '#fff', isExternal, target }) => {
    return (
        <LinkWrapper className={`${isReversed ? 'is-reversed' : ''} ${mobileUnderline ? 'mobile-underline' : ''}`} lineColor={lineColor}>
            {isExternal ? (
                <a href={toUrl} target={target} onClick={handleClick}>
                    {children}
                </a>
            ) : (
                <Link to={toUrl} target={target} onClick={handleClick}>
                    {children}
                </Link>
            )}
        </LinkWrapper>
    );
};

export default LinkComponent;
