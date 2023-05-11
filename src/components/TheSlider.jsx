import React, { useState } from 'react';
import { Typography, Slider, TextField } from '@mui/material';

const marksValues = {
  '-1': 'Não',
  '0': 'Neutro',
  '1': 'Sim',
};

function TheSlider({ name }) {
  const [value, setValue] = useState('');
  const [textFieldValue, setTextFieldValue] = useState('');
  const [sliderColor, setSliderColor] = useState('');

  const handleChangeSlider = (event, newValue) => {
    setValue(newValue);
    setTextFieldValue(marksValues[newValue]);
    setSliderColor(newValue === -1 ? 'red' : newValue === 0 ? 'grey' : 'green');
  };

  const handleChangeTextField = (event) => {
    setTextFieldValue(event.target.value);
    switch (event.target.value) {
      case 'Sim':
        setValue(1);
        setSliderColor('green');
        break;
      case 'Neutro':
        setValue(0);
        setSliderColor('grey');
        break;
      case 'Não':
        setValue(-1);
        setSliderColor('red');
        break;
      default:
        setValue('');
        setSliderColor('');
        break;
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <Typography id={`${name}-slider`} gutterBottom>
        {name}
      </Typography>
      <Slider
        value={value}
        step={1}
        min={-1}
        max={1}
        name={name}
        onChange={handleChangeSlider}
        getAriaValueText={(value) => (value === 0 ? 'Neutro' : value === -1 ? 'Não' : 'Sim')}
        valueLabelDisplay="off"
        style={{ color: sliderColor }}
      />
      <TextField
        id={`${name}-text`}
        label="Valor"
        value={textFieldValue}
        onChange={handleChangeTextField}
        style={{ width: '100%' }}
      />
    </div>
  );
}
export default TheSlider;