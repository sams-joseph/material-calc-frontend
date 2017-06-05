import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Select from '../Select';
import InputGroup from '../InputGroup';

import { getCategories } from '../../actions/categories';
import { setMaterials } from '../../actions/materials';

import chevronRight from './img/chevron-right.svg';


class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diameter: '',
      circumference: '',
      category: 'Select Category',
      material: 'Select Material'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  handleChange(value, name) {
    const { categories } = this.props;

    switch(name) {
      case 'category':
        const selectedCategory = categories.categories.find(category => {
          if(category.name === value) return true;
          return false;
        });

        this.setState({
          category: selectedCategory.name,
          material: 'Select Material'
        });
        this.props.setMaterials(selectedCategory._materials);
        break;
      case 'material':
      case 'diameter':
      case 'circumference':
        this.setState({
          [name]: value
        });

        break;
      default: break;
    }
  }

  render() {
    const { categories, materials } = this.props;

    return (
      <div className='container'>
        <ul className='breadcrumbs'>
          <li><Link to='/'>Home</Link></li>
          <li><img src={ chevronRight } alt='chevron-right'/></li>
        </ul>
        <form>
        <Select
        name="category"
        value={ this.state.category }
        onChange={ this.handleChange }
        options={ categories.categories }
        />
        <Select
        name="material"
        value={ this.state.material }
        onChange={ this.handleChange }
        options={ materials }
        />
        <InputGroup
        type="text"
        name="diameter"
        label="Core Diameter"
        onChange={ this.handleChange }
        />
        <InputGroup
        type="text"
        name="circumference"
        label="Circumference"
        onChange={ this.handleChange }
        />
        </form>
      </div>
    )
  }
}

Calculator.propTypes = {
  categories: PropTypes.object.isRequired,
  flash: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  setMaterials: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    materials: state.materials,
    flash: state.flash,
    user: state.user
  }
}


export default connect(mapStateToProps, { getCategories, setMaterials })(Calculator);
