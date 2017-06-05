import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { getCategories } from '../../actions/categories';
import { setMaterials } from '../../actions/materials';
import { logout, checkLoginExpiration } from '../../actions/authorization';

import './css/style.css';

import chevronRight from './img/chevron-right.svg';
import plusCircle from './img/plus-circle.svg';
import userIcon from './img/user.svg';
import edit from './img/edit-3.svg';
import deleteIcon from './img/delete.svg';
import alertCircle from './img/alert-circle.svg';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'Select Category',
      material: 'Select Material',
      showAlert: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.deleteMaterial = this.deleteMaterial.bind(this);
    this.handlePopupClicks = this.handlePopupClicks.bind(this);
  }

  componentDidMount() {
    if(this.props.checkLoginExpiration(this.props.user.user.exp)) {
      this.props.logout();
    }
    this.props.getCategories();
  }

  handleChange(value, name) {
    const { categories } = this.props;
    const selectedCategory = categories.categories.find(category => {
      if(category.name === value) return true;
      return false;
    });

    this.setState({
      category: selectedCategory.name,
      material: 'Select Material'
    });
    this.props.setMaterials(selectedCategory._materials);
  }

  deleteMaterial(e, material) {
    e.preventDefault();

    this.setState({
      showAlert: true
    });
  }

  handlePopupClicks(e) {
    if(e.target.name === 'yes') {
      this.setState({
        shouldDelete: true
      });
    } else if(e.target.name === 'no') {
      this.setState({
        shouldDelete: false
      });
    }
    this.setState({
      showAlert: false
    })
  }

  render() {
    const { categories, materials } = this.props;

    return (
      <div className='container'>
        <div className={ `alert-container ${ this.state.showAlert ? 'show-alert' : 'hide-alert' }` }>
          <div className='verify-delete-popup'>
            <div className='popup-message'>
              <img src={ alertCircle } alt='Alert' />
              Are you sure you want to Delete?
            </div>
            <div className='button-group'>
              <button name='yes' onClick={ e => this.handlePopupClicks(e) }>Yes</button>
              <button name='no' onClick={ e => this.handlePopupClicks(e) }>No</button>
            </div>
          </div>
        </div>
        <ul className='breadcrumbs'>
          <li><Link to='/'>Home</Link></li>
          <li><img src={ chevronRight } alt='chevron-right'/></li>
          <li>Admin</li>
        </ul>
        <div className='admin-controls'>
          <select
          className='admin-category-select'
          value={ this.state.category }
          name='categories'
          onChange={ e => this.handleChange(e.target.value, e.target.name) }
          >
          <option disabled>Select Category</option>
          {
            categories.categories.map( category =>
              <option value={ category.name } key={ category._id }>
              { category.name }
              </option>
            )
          }
          </select>
          <Link to='/add-category'><img src={ plusCircle } alt='Plus' />Category</Link>
          <Link to='/add-material'><img src={ plusCircle } alt='Plus' />Material</Link>
        </div>
        <ul className='material-list'>
        {
          materials.map(material =>
            <li key={ material._id }>
              <div className='list-user-info'>
                <div className='profile-picture'>
                  <img src={ userIcon } alt='User Icon' />
                </div>
                <div className='user-details'>
                  <span className='user-name'>{ `${ material._creator.profile.firstName } ${ material._creator.profile.lastName }` }</span>
                  <span className='user-role'>{ material._creator.role }</span>
                </div>
              </div>
              <div className='list-material'>{ material.name }</div>
              <div className='list-thickness'>{ material.thickness }</div>
              <div className='list-created-at'>{ moment(material.createdAt).format('MMM Do YY') }</div>
              <div className='list-controls'>
                <Link to='/edit-material/:id'>
                  <img src={ edit } alt='Edit' />
                </Link>
                <a onClick={ e => this.deleteMaterial(e, material) }>
                  <img src={ deleteIcon } alt='Delete' />
                </a>
              </div>
            </li>
          )
        }
        </ul>
      </div>
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
