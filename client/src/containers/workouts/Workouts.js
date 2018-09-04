import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'mdbreact'
import WorkoutListItem from '../../components/Workout/WorkoutListItem'
import AddWorkoutButton from '../../components/Workout/AddWorkoutButton'
import { Container, Row, Col, Button } from 'mdbreact';
import Spinner from '../../components/UI/Spinner';
import { Redirect } from 'react-router-dom';

class Workouts extends Component {

  state = {
    workouts: [{id:1, title: "No workouts to display", description: "Click to create your first workout!"}],
    error: null
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    const url = 'http://localhost:3001/workouts'
    fetch(url, {
       method: 'GET',
       headers: {
         'Authorization': `Bearer + ${token}`,
         'Content-Type': 'application/json; charset=utf-8"d'
       },
     })
     .then( response => {
       console.log(response)
       return response.json()
     })
     .then( json => {
       console.log(json)
       if(json.status !== 200) {throw json}
       if(json.workouts.length > 0){
         const userWorkouts = json.workouts
         this.setState({
           workouts: userWorkouts
         })}
     })
     .catch( err => {
         console.log(err)
     })
    }


  render(){

    let spinner = null;
    if ( this.props.loading ) {spinner = <Spinner />}

    let authRedirect = null;
      if ( !this.props.isAuthenticated ) { authRedirect = <Redirect to="/Login" /> }

    let wo = this.state.workouts

    return(
      <Container className="mt-5 mx-auto">
        {authRedirect}
      <Row>
        <Col md="4"/>
          <Col >
            <AddWorkoutButton />
        </Col>
      </Row>
      <Row >
        <Col md="12">
          <ListGroup>
            {wo.map((workout) =>
              <WorkoutListItem
                key={workout.id}
                title={workout.title}
                description={workout.description}/>

            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>

    )
  }

}


const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null,
  }
}


export default connect( mapStateToProps)(Workouts);
