import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import Spinner from '../../components/UI/Spinner'

class Signup extends Component {

      state = {
        email: '',
        password: '',
        username: ''
      }

      handleChange = event => {
        console.log(this.state)
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onSignup( this.state.email, this.state.password, this.state.username);
      }

    render(){

      let form =
        <form onSubmit={this.submitHandler}>
          <p className="h4 text-center mb-4">Sign up</p>
          <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Choose Username</label>
          <input onChange={this.handleChange} type="text" name="username" value={this.state.username} className="form-control"/>
          <br/>
          <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Your Email</label>
          <input onChange={this.handleChange} type="email" name="email" value={this.state.email} className="form-control"/>
          <br/>
          <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">Choose Password</label>
          <input onChange={this.handleChange} type="password" name="password" value={this.state.password}  className="form-control"/>
          <div className="text-center mt-4">
            <button className="btn btn-indigo" type="submit">Register</button>
          </div>
        </form>

        if ( this.props.loading ) {form = <Spinner />}

      return(
        <Container className="mt-5 mx-auto">
          <Row>
            <Col md="3"/>
            <Col md="6">
              {form}
            </Col>
          </Row>
        </Container>
      )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: ( email, password, username ) => dispatch( actions.signup( email, password, username) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Signup );