import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'mdbreact';
import AuthTabs from './AuthTabs'
import UnAuthTabs from './UnAuthTabs'

class NavTool extends Component {
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
                <NavbarBrand href="/">
                    <strong>Navbar</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                  {this.props.isAuth ? <AuthTabs /> : <UnAuthTabs />}
                </Collapse>
            </Navbar>
        );
    }
}

export default NavTool;import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'mdbreact';
import AuthTabs from './AuthTabs'
import UnAuthTabs from './UnAuthTabs'

class NavTool extends Component {
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
                <NavbarBrand href="/">
                    <strong>Navbar</strong>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                  {this.props.isAuth ? <AuthTabs /> : <UnAuthTabs />}
                </Collapse>
            </Navbar>
        );
    }
}

export default NavTool;
