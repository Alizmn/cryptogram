import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox({options, label, defaultValue, onChoose}) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) =>
        {
          params.inputProps.value && onChoose();
          return <TextField {...params} defaultValue={"The Kid"} label={label} variant="outlined" />}
        }
    />
  );
}