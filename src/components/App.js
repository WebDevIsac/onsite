import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import { resetStyle } from '../theme/resetStyle';
import { fontString } from '../theme/fonts/fontString';

import Header from './Header';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import FrontPage from '../pages/FrontPage';

const Site = styled('div')`
    min-height: 100vh;
    overflow-x: hidden;
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
                </Site>
            </Router>
        </>
    );
};

export default App;
