// Core
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Route config
import { routes } from './routes';

// Pages
import { PublicHome } from '../../pages'

const Public = () => {
    return (
        <Switch location = { location } >
            <Route
                exact
                path = { routes.home }
                render = { (props) => (<PublicHome { ...props } />) }
            />
            <Redirect to = { '/' } />
        </Switch>
    );
};

export default Public;
