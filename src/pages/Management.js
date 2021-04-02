import React from 'react';
import styled from '@emotion/styled';
import Hero from 'components/Hero';

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

const H2 = styled('h2')`
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

const Management = () => {
    return (
        <Wrapper>
            <Hero text='Management Consultant' />
            <ContentWrapper>
                <H2>Management Consultant</H2>
                <Text>
                    We offer you a management consultant as an independent advisor and at the same time both specialist and generalist, who assists with an
                    "from the outside-in perspective" that leads to new ways of thinking and thus increases the value for you as a customer. Change is
                    unavoidable, but as humans we have a natural resistance toward it. And although it may be difficult, you can either change with the times,
                    or be changed by them. It is the organisations that make change part of the way they think and act that will shape the future. Those who
                    unlock higher levels of performance and engagement from their teams and develop leadership throughout their organisation will be the ones
                    best equipped to capitalise as the world changes.
                </Text>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Management;
