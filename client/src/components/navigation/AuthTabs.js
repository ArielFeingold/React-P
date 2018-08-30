import React from 'react'
import {NavbarNav, NavItem, NavLink } from 'mdbreact';

const AuthTabs = () => (
  <React.Fragment>
    <NavbarNav left>
      <NavItem active>
          <NavLink to="#" >Home</NavLink>
      </NavItem>
      <NavItem>
          <NavLink to="#" disabled>Exercises</NavLink>
      </NavItem>
      <NavItem>
          <NavLink to="#">Workouts</NavLink>
      </NavItem>
    </NavbarNav>
    <NavbarNav right>
      <NavItem>
        <NavLink to="#">Logout</NavLink>
      </NavItem>
    </NavbarNav>
  </React.Fragment>
)

export default AuthTabs;
