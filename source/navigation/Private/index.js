// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Route config
import { routes } from './routes';

// Pages
import { PrivateHome } from '../../pages';

const Public = () => {
    return (
        <Switch location = { location } >
            <Route
                exact
                path = { routes.home }
                render = { (props) => (<PrivateHome { ...props } />) }
            />
        </Switch>
    );
};

export default Public;
