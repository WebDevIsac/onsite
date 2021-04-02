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

const Interim = () => {
    return (
        <Wrapper>
            <Hero text='Interim Solutions' />
            <ContentWrapper>
                <H2>Interim Solutions</H2>
                <Text>
                    interim assignments are always a relationship between three parties; the employer, the consultant who carries out the assignment and OnSite.
                    Our independent and experienced consultants support you when you need a top talent for a limited period of time. Together we work to achieve
                    the best possible result. Appointing an interim consultant needs to be quick, but we know that speed must never exceed quality. Together, we
                    ensure that we meet the needs that arise in the business in as fast, efficient and qualitative a way as possible.
                </Text>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Interim;
