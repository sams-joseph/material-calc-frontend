import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Calculator from '../Calculator';
import Admin from '../Admin';
import Login from '../Login';
import Flash from '../Flash';
import NotFound from '../NotFound';

import requireAuth from '../../utils/requireAuth';

const Main = (props) => {
  return (
    <div>
      <Flash />
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Calculator }/>
        <Route path='/admin' component={ requireAuth(Admin) }/>
        <Route path='/login' component={ Login }/>
        <Route path='/*' component={ NotFound }/>
      </Switch>
    </div>
  )
}


export default Main;
