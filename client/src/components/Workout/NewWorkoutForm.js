import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner'

class NewWorkoutForm extends React.Component  {

  state = {
    title: "",
    description: "",
    excersises: [],
    errors: null,
    loading: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = ( event ) => {
    event.preventDefault();
    event.target.className += ' was-validated';

  }

  render() {

    let spinner = null;
    if ( this.state.loading ) {spinner = <Spinner />}

    let authRedirect = null;
    if ( !this.props.isAuthenticated ) {
        authRedirect = <Redirect to="/Login" />
    }

    let errorMessage = null;
    if ( this.props.errors ) {
        errorMessage = (
          <div>
            <Button className="w-100 p-3" color="danger">User Not Found</Button>
          </div>
        );
    }

    return(
      <Container>
        <Row>
          <Col md="12">
            <form className='needs-validation example z-depth-5 p-3' onSubmit={this.submitHandler} noValidate>
              <p className="h4 text-center mb-4">CREATE WORKOUT</p>
              {errorMessage}
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">TITLE</label>
              <input type="text" name="titl" value={this.state.title} id="defaultFormLoginEmailEx" onChange={this.handleChange} className="form-control" required/>
              <br/>
              <label className="grey-text">DESCRIPTION</label>
              <input type="text" className="form-control" value={this.state.description} name="description" onChange={this.handleChange} required/>
              <div className="text-center mt-4">
              <button className="btn btn-indigo" type="submit">ADD WORKOUT</button>
              </div>
          </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect( mapStateToProps)(NewWorkoutForm);
