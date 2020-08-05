import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Label from '../Label';
import Option from './Option';
import OptionSeparator from './OptionSeparator';

import OptionObject from '../../../types/OptionObject';

/**
 * Displays options that the user can toggle between.
 * @prop {string}       label          Label describing what is being selected.
 * @prop {Array}        options        Available options as OptionObjects.
 * @prop {OptionObject} selected       The currently selected option
 * @prop {function}     updateSelected Callback to update the selected option.
 */
const TextSelectStructure = ({
  label,
  options,
  selected,
  updateSelected,
  className,
}) => {
  /**
   * Handle changes on the native select element
   * @param {Event} event onChange event
   */
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    const optionWithGivenValue = options.find((option) => {
      return option.value === newValue;
    });

    if (optionWithGivenValue) {
      updateSelected(optionWithGivenValue);
    }
  };

  /**
   * Handle button clicks
   */
  const handleButtonChange = (option) => () => {
    updateSelected(option);
  };

  return (
    <div className={className}>
      <Label labelFor={label}>{label}</Label>

      <select onChange={handleSelectChange} value={selected.value} id={label}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>

      {options.map((option, index) => (
        <React.Fragment key={option.value}>
          <Option
            selected={option === selected}
            onClick={handleButtonChange(option)}
          >
            {option.name}
          </Option>
          {index < options.length - 1 ? <OptionSeparator /> : null}
        </React.Fragment>
      ))}
    </div>
  );
};

const TextSelect = styled(TextSelectStructure)`
  select {
    position: absolute;
    width: 0;
    height: 0;
    left: -100vw;
  }
`;

TextSelectStructure.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.instanceOf(OptionObject)),
  selected: PropTypes.instanceOf(OptionObject),
  updateSelected: PropTypes.func,
  className: PropTypes.string,
};

export default TextSelect;
