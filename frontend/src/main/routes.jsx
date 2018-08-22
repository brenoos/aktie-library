import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'


import Dashboard from '../dashboard/dashboard'
import Avaliacao from '../avaliacao/avaliacao'
import AuthOrApp from './authOrApp'
import App from './app'

const Routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Dashboard} />
            <Route path='avaliacao' component={Avaliacao} />
        </Route>
        <Route from='*' to='/' />
    </Router>
)
export default Routes