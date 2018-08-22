import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'


import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'

const Routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp} >
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Route from='*' to='/' />
    </Router>
)
export default Routes