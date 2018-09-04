import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
<<<<<<< HEAD

=======
>>>>>>> db8bfe6bf3a773d05b37b861ad6a4342d17c0617
import Login from '../../containers/auth/Login'
import Signup from '../../containers/auth/Signup'
import Logout from '../../containers/auth/Logout'
import Workouts from '../../containers/workouts/Workouts'

const Main = () => (
  <main>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path="/logout" component={Logout} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <Route path="/workouts" component={Workouts} />
=======
      <Route path="/home" component={Home} />
      <Route path="/home" component={Home} />
>>>>>>> db8bfe6bf3a773d05b37b861ad6a4342d17c0617
>>>>>>> fc44e0e683cff1e369f5fd13ea961736a4cd2485
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  </main>
)

export default Main
