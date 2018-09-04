import React from 'react'
import {NavbarNav, NavItem } from 'mdbreact';
import { Link } from 'react-router-dom'

const AuthTabs = () => (
  <React.Fragment>
    <NavbarNav left>
      <NavItem >
          <Link className="nav-link" to="#" >Home</Link>
      </NavItem>
      <NavItem>
          <Link className="nav-link" to="#" disabled>Exercises</Link>
      </NavItem>
      <NavItem>
          <Link className="nav-link" to="#">Workouts</Link>
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
