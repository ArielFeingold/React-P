import React from 'react';
import { Button } from 'mdbreact'
import { Link } from 'react-router-dom';

const AddWorkoutButton = (props) => (
<Link to="/workout/new"><Button color="dark-green">Create New Workout</Button></Link>
)

export default AddWorkoutButton;
