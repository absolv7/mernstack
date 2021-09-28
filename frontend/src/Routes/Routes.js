import React from 'react'
import { Route, Switch } from "react-router"
import Notes from '../components/Notes';
import Users from '../components/Users';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/notes" component={Notes}></Route>
        </Switch>
    )
}

export default Routes;