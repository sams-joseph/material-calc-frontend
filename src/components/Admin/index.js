import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCategories } from '../../actions/categories';
import { setMaterials } from '../../actions/materials';
import { logout, checkLoginExpiration } from '../../actions/authorization';


class Admin extends Component {
  componentDidMount() {
    if(this.props.checkLoginExpiration(this.props.user.user.exp)) {
      this.props.logout();
    }
    this.props.getCategories();
  }

  render() {

    return (
      <h1>admin</h1>
    )
  }
}

Admin.propTypes = {
  categories: PropTypes.object.isRequired,
  flash: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  setMaterials: PropTypes.func.isRequired,
  checkLoginExpiration: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    materials: state.materials,
    flash: state.flash,
    user: state.user
  }
}

export default connect(mapStateToProps, { checkLoginExpiration, logout, getCategories, setMaterials })(Admin);
