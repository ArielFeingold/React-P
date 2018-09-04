import { Component } from 'react';
import { connect } from 'react-redux';

class Workouts extends Component {

  state = {
    workouts: null,
    error: null
  }

  componentDidMount() {
    getWorkouts()
  }


  render(){
    return(
      "workouts"
    )
  }

}

function getWorkouts() {
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
   this.setState({
     workouts: json
   })
 })
 .catch( err => {
     console.log(err)
 })
}


const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token
  }
}


export default connect( mapStateToProps)(Workouts);
