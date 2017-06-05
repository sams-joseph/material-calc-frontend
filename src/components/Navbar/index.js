import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authorization';

import './css/style.css';
import power from './img/power.svg';
import userIcon from './img/user.svg';

class Navbar extends Component {
  logout() {
    this.props.logout();
  }

  render() {
    const isAuthenticated = this.props.user.isAuthenticated;

    const guestRoutes = (
      <nav className='site-navigation'>
        <div className='global-navigation'>
          <Link to='/'>Home</Link>
        </div>
        <div className='auth-navigation'>
          <Link className='login-button' to='/login'>Login</Link>
        </div>
      </nav>
    );

    const authRoutes = (
      <nav className='site-navigation'>
        <div className='global-navigation'>
          <Link to='/'>Home</Link>
          <span className='link-divider'></span>
          <Link to='/admin'>Admin</Link>
        </div>
        <div className='auth-navigation'>
          <span className='user-name'>{ this.props.user.user.firstName }</span>
          <span className='profile-picture'>
            <img src={ userIcon } alt='User Icon' />
          </span>
          <a onClick={ this.logout.bind(this) }>
            <img src={ power } alt='logout' />
          </a>
        </div>
      </nav>
    );

    return (
        <div className='container'>
          {
            isAuthenticated ?
            authRoutes :
            guestRoutes
          }
        </div>
    )
  }
}

Navbar.PropTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, { logout })(Navbar);
