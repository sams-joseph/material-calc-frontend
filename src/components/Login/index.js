import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/authorization';

import './css/style.css';
import chevronRight from './img/chevron-right.svg';
import unlock from './img/unlock.svg';
import atSign from './img/at-sign.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(value, name) {
    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(
      (res) => this.props.history.push('/admin'),
      (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
    );
  }

  render() {
    return (
      <div className='container'>
        <ul className='breadcrumbs'>
          <li><Link to='/'>Home</Link></li>
          <li><img src={ chevronRight } alt='chevron-right'/></li>
          <li>Login</li>
        </ul>
        <form className='login-form' onSubmit={ this.onSubmit }>
          <h1>Welcome Back!</h1>
          <div className='input-group'>
            <label htmlFor='email'><img src={ atSign } alt='email' /></label>
            <input
              type='email'
              name='email'
              onChange={ e => this.handleChange(e.target.value, e.target.name) }
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'><img src={ unlock } alt='password' /></label>
            <input
              type='password'
              name='password'
              onChange={ e => this.handleChange(e.target.value, e.target.name) }
            />
          </div>

          <input type="submit" value="Sign In"/>
          <Link to=''>Forgot your password?</Link>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}


export default connect(null, { login })(Login);
