import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Decrypt from './core/Decrypt'
import Encrypt from './core/Encrypt'
import FileDetails from './core/FileDetails'
import Home from './core/Home'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/encrypt' exact component={Encrypt}></Route>
                <Route path='/decrypt' exact component={Decrypt}></Route>
                <Route path='/decrypt/filedetails' exact component={FileDetails}></Route>
            </Switch>
        </BrowserRouter>
    )
}
