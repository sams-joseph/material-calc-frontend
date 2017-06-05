import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteFlashMessage } from '../../actions/flash';

import './css/style.css';
import './img/check-circle.svg';

class Flash extends Component {
  close() {
    this.props.deleteFlashMessage(this.props.flash.id);
  }

  render() {
    const { flash } = this.props;

    return (
        <div className={ `flash-container ${flash.type} ${flash.text ? 'show-message' : 'hide-message'}` }>
          <span className='flash-icon'></span>
          <span className='flash-message'>{ flash.text }</span>
          <span className='flash-button' onClick={ this.close.bind(this) }></span>
        </div>
    )
  }
}

Flash.PropTypes = {
  flash: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    flash: state.flash
  }
}


export default connect(mapStateToProps, { deleteFlashMessage })(Flash);
