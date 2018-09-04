import { Component } from 'react';
import { connect } from 'react-redux';

class Workouts extends Component {

  componentsDidMount() {

  }

  render(){
    return()
  }

}

mapStateToProps = () => {
  userId: state.auth.userId
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: ( email, password ) => dispatch( actions.login( email, password) ),
        onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(Workouts);
