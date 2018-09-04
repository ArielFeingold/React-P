import React from 'react';
import { ListGroupItem } from 'mdbreact'

const WorkoutListItem = (props) => (
<ListGroupItem>
  <h5 className="font-weight-bold">{props.title}</h5>
  <p>{props.description}</p>
</ListGroupItem>
)

export default WorkoutListItem;
