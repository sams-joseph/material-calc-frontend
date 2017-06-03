import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputGroup from '../InputGroup';
import { login } from '../../actions/authorization';

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
      (res) => this.props.history.push('/'),
      (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
    );
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <InputGroup
          type="email"
          name="email"
          label="email"
          onChange={ this.handleChange }
        />
        <InputGroup
          type="password"
          name="password"
          label="password"
          onChange={ this.handleChange }
        />

        <input type="submit" value="login"/>
      </form>
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
