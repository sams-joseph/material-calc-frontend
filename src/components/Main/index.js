import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Calculator from '../Calculator';
import Admin from '../Admin';
import Login from '../Login';

import requireAuth from '../../utils/requireAuth';

const Main = (props) => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Calculator }/>
        <Route path='/admin' component={ requireAuth(Admin) }/>
        <Route path='/login' component={ Login }/>
      </Switch>
    </div>
  )
}


export default Main;
