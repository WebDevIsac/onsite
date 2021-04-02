import React from 'react';
import styled from '@emotion/styled';
import Hero from 'components/Hero';
import { Link } from 'react-router-dom';

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
`;

const H2 = styled('h2')`
    margin-bottom: 8px;

    & > div {
        display: inline;
    }

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

const Column = styled('div')`
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
        margin-bottom: 32px;
    }
`;

const FrontPage = () => {
    return (
        <Wrapper>
            <Hero text='OnSite creates success for individuals and companies' />
            <ContentWrapper>
                <H2>Onsite</H2>
                <Column>
                    <Text>
                        Helene Kry started OnSite as a Executive Search firm 2007. Helene Kry’s heritage began when she started her first recruiting career
                        within Manpower 1999 working with a broad range of industries. She mentored her highly successful team of recruiters to seek out top
                        talent in Sweden. In 2007 she launched OnSite to provide highly personalized executive search and strategy within the Lifestyle, Fashion
                        and Retail Industries. For 13 years, she worked with Gina Tricot in building the organization, developing the culture, hiring talents
                        and management, start up business in the Nordic Countries and Germany. Focusareas also on Change Management and Coaching Toplevel
                        Managers. With 22 years of executive search and management experience, We can provide superior service, industry insight and experience
                        with a special expertise in fashion and lifestyle.
                    </Text>
                    <Link to='/about'>Read more about Onsite</Link>
                </Column>
            </ContentWrapper>
        </Wrapper>
    );
};

export default FrontPage;
