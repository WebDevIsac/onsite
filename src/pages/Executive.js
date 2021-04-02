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

const Executive = () => {
    return (
        <Wrapper>
            <Hero text='Executive Search' />
            <ContentWrapper>
                <H2>Executive Search</H2>
                <Text>
                    Offer specialized searches that are highly tailored to the needs of each client. Our approach is of a consultative nature; listening to
                    clients’ objectives and working closely with the hiring team and HR to advise what kind of talent is required to achieve those goals.
                    Through its extensive network and experience, the firm seeks out innovative and diverse talents that must also be a cultural fit for the
                    brand. We provide superior service, industry insight and experience with a special expertise in Creative Fashion and Lifestyle/Marketing.
                </Text>
                <Text>
                    We are, but not in the traditional sense.
                    <ul>
                        <li>
                            1. We offer a more competitive and flexible search agreement than the traditional search firms offer. Our contract is based on
                            positive deliverables and client satisfaction, we are not paid on a pre-set timetable regardless of progress.
                        </li>
                        <li>
                            2. We do not hand over the search to other recruiters or administrative staff like other firms do. I, the founder, am 100% involved
                            and manage each search from beginning to closure. While we are supported by a research staff, they are non client facing. We pride
                            ourselves on a positive candidate experience as we strongly believe when we work on a search, we are an extension of our client, an
                            ambassador of their brand. We want candidates to have a positive perception of the brand even if they do not get the role. This long
                            term relationship we build with our candidates is also why they always respond positively to us when we contact them for a role.
                            They know we understand their special expertise and why the role and client we are proposing would be of interest to them.
                        </li>
                    </ul>
                </Text>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Executive;
