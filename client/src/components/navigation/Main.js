import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../containers/auth/Login'
import Signup from '../../containers/auth/Signup'
import Logout from '../../containers/auth/Logout'

const Main = () => (
  <main>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path="/logout" component={Logout} />
    </Switch>
  </main>
)

export default Main
