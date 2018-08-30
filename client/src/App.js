import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Navigation/Header'
import Main from './components/Navigation/Main'

import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Header isAuth={this.props.isAuthenticated}/>
        <Main isAuth={this.props.isAuthenticated}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};



export default withRouter( connect( mapStateToProps)( App ) );
