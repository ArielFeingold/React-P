import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import '../../App.css';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody } from 'mdbreact';
import Spinner from '../../components/UI/Spinner'

class Login extends Component {

      state = {
        email: '',
        password: '',
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.email, this.state.password);
      }


    render(){

     let form =
            <form onSubmit={this.submitHandler}>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Your email</label>
              <input type="email" name="email" id="defaultFormLoginEmailEx" onChange={this.handleChange} className="form-control"/>
              <br/>
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Your password</label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control" name="password" onChange={this.handleChange}/>
              <div className="text-center mt-4">
              <button className="btn btn-indigo" type="submit">Login</button>
              </div>
          </form>

          if ( this.props.loading ) {
              form = <Spinner />
          }

      return(
        <Container className="mt-5 mx-auto">
        <Row >
          <Col md="3" />
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
        onLogin: ( email, password ) => dispatch( actions.login( email, password) ),
        onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );
