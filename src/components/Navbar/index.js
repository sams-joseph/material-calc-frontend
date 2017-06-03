import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const isAuthenticated = this.props.user.isAuthenticated;

    return (
        <nav>
          <Link to='/'>Home</Link>
          {
            isAuthenticated ?
            <Link to='/admin'>Admin</Link> :
            <Link to='/login'>Login</Link>
          }
        </nav>
    )
  }
}

Navbar.PropTypes = {
  user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Navbar);
