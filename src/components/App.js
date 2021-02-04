import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

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
                                <Services />
                            </Route>
                            <Route path='/om-oss'>
                                <About />
                            </Route>
                            <Route path='/kontakt'>
                                <Contact />
                            </Route>
                            <Route path='/'>
                                <FrontPage />
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
