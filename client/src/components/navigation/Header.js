import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'mdbreact';
import AuthTabs from './AuthTabs'
import UnAuthTabs from './UnAuthTabs'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Navbar color="indigo" dark expand="md" scrolling>
                <NavbarBrand style={{color: "white"}}>
                    <strong>GymJam</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                  {this.props.isAuth ? <AuthTabs /> : <UnAuthTabs />}
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
