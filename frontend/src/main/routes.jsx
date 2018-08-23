import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'


import Dashboard from '../dashboard/dashboard'
import Avaliacao from '../avaliacao/avaliacao'
import AuthOrAdmin from './authOrAdmin'
import App from './app'

const Routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Dashboard} />
            <Route path='avaliacao' component={Avaliacao} />
        </Route>
        <Route path='/admin' component={AuthOrAdmin} />
        <Route from='*' to='/' />
    </Router>
)
export default Routes