import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

// const options = ['Option 1', 'Option 2'];

export default function Cryptoselect({options, title, preFill}) {
  const [value, setValue] = React.useState(preFill);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          newValue && setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={title} variant="outlined" defaultValue={preFill}/>}
      />
    </div>
  );
}