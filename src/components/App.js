import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import loadable from '@loadable/component';

import { resetStyle } from 'assets/resetStyle';
import { fontString } from 'assets/fonts/fontString';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Services from 'pages/Services';
import About from 'pages/About';
import Contact from 'pages/Contact';
import FrontPage from 'pages/FrontPage';

const Site = styled('div')`
    min-height: 100vh;
    overflow-x: hidden;
`;

const PageWrapper = styled('div')`
    height: 100%;
    width: 100%;
    max-width: 1980px;
    margin: 0 auto 64px;
`;

const LoadableServices = loadable(() => import('pages/Services'));
const LoadableAbout = loadable(() => import('pages/About'));
const LoadableContact = loadable(() => import('pages/Contact'));
const LoadableFrontPage = loadable(() => import('pages/FrontPage'));

const App = () => {
    return (
        <>
            <Global
                styles={css`
                    ${resetStyle}
                    ${fontString}
                `}
            />
            <Router>
                <Site>
                    <Header />
                    <PageWrapper>
                        <Switch>
                            <Route path='/tjanster'>
                                <LoadableServices />
                            </Route>
                            <Route path='/om-oss'>
                                <LoadableAbout />
                            </Route>
                            <Route path='/kontakt'>
                                <LoadableContact />
                            </Route>
                            <Route path='/'>
                                <LoadableFrontPage />
                            </Route>
                        </Switch>
                    </PageWrapper>
                    <Footer />
                </Site>
            </Router>
        </>
    );
};

export default App;
