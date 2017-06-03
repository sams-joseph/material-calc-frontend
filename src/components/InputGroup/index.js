import React from 'react';
import PropTypes from 'prop-types';


const InputGroup = (props) => {
  const { name, label, onChange, type } = props;

  return (
    <div>
      <label htmlFor={ name }>{ label }</label>
      <input
        type={ type }
        name={ name }
        onChange={ e => onChange(e.target.value, e.target.name) }
      />
    </div>
  )
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}


export default InputGroup;
