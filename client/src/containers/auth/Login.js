import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import { Container, Row, Col, Button } from 'mdbreact';
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
        event.target.className += ' was-validated';
        this.props.onLogin( this.state.email, this.state.password);
      }


    render(){

      let spinner = null;
      if ( this.props.loading ) {spinner = <Spinner />}

      let errorMessage = null;
      if ( this.props.errors ) {
          errorMessage = (
            <div>
              <Button className="w-100 p-3" color="danger">User Not Found</Button>
            </div>
          );
      }

      let authRedirect = null;
      if ( this.props.isAuthenticated ) {
          authRedirect = <Redirect to="/workouts" />
      }

      return(
        <Container className="mt-5 mx-auto">
          {authRedirect}
        <Row >
          <Col md="3" />
          <Col md="6">
            {spinner}
            <form className='needs-validation example z-depth-5 p-3' onSubmit={this.submitHandler} noValidate>
              <p className="h4 text-center mb-4">Log In</p>
              {errorMessage}
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Your email</label>
              <input type="email" name="email" value={this.state.email} id="defaultFormLoginEmailEx" onChange={this.handleChange} className="form-control" required/>
              <br/>
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Your password</label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control" value={this.state.password} name="password" onChange={this.handleChange} required/>
              <div className="text-center mt-4">
              <button className="btn btn-indigo" type="submit">Login</button>
              </div>
          </form>
          </Col>
        </Row>
      </Container>
      )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        errors: state.auth.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: ( email, password ) => dispatch( actions.login( email, password) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );
