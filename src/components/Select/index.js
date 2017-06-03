import React from 'react';
import PropTypes from 'prop-types';


const Select = (props) => {
  const { onChange, options, value, name } = props;

  return (
    <select
      value={ value }
      name={ name }
      onChange={ e => onChange(e.target.value, e.target.name) }
    >
      <option disabled>{ value }</option>
      {
        options.map( option =>
          <option value={ option.name } key={ option._id }>
            { option.name }
          </option>
        )
      }
    </select>
  )
}

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}


export default Select;
