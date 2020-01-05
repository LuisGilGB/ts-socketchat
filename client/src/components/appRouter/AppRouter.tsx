import React, {ComponentType} from 'react';
import {HashRouter, Switch, Route, withRouter} from 'react-router-dom';
import Navigation from './navigation/Navigation';

const BlockedNavigation = withRouter(Navigation as ComponentType<RouteComponentProps>);

const AppRouter: React.FC = () => {
    return (
        <HashRouter>
            <React.Fragment>
                <BlockedNavigation/>
                <Switch>
                    <Route path="/" component={}/>
                </Switch>
            </React.Fragment>
        </HashRouter>
    );
}

export default AppRouter;