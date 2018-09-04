import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../../containers/auth/Login'
import Signup from '../../containers/auth/Signup'
import Workouts from '../../containers/workouts/Workouts'
import NewWorkoutForm from '../../components/Workout/NewWorkoutForm'
import Logout from '../../containers/auth/Logout'


const Main = () => (
  <main>
    <Switch>
      <Route path='/login' exact component={Login}/>
      <Route path='/signup' exact component={Signup}/>
      <Route path="/logout" exact component={Logout} />
      <Route path="/workout/new" exact component={NewWorkoutForm} />
      <Route path="/workouts" exact component={Workouts} />
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  </main>
)

export default Main
