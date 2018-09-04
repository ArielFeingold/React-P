import React from 'react'
import {NavbarNav, NavItem } from 'mdbreact';
import { Link } from 'react-router-dom'

const AuthTabs = () => (
  <React.Fragment>
    <NavbarNav left>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      <NavItem >
          <Link className="nav-link" to="#" >Home</Link>
      </NavItem>
>>>>>>> db8bfe6bf3a773d05b37b861ad6a4342d17c0617
>>>>>>> fc44e0e683cff1e369f5fd13ea961736a4cd2485
      <NavItem>
          <Link className="nav-link" to="/workouts">Workouts</Link>
      </NavItem>
      <NavItem>
          <Link className="nav-link" to="#" disabled>Exercises</Link>
      </NavItem>

    </NavbarNav>
    <NavbarNav right>
      <NavItem>
        <Link className="nav-link" to="/logout">Logout</Link>
      </NavItem>
    </NavbarNav>
  </React.Fragment>
)

export default AuthTabs;
