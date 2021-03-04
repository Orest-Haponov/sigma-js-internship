import React from 'react';
import TextField from '@material-ui/core/TextField';
import { IInput } from '../../../Interface/Interface';

const ProjectInput: React.FC<IInput> = props => {
  const onValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.valueChange(event.target.value);
  };

  return (
    <TextField
      label={props.label}
      value={props.value}
      onChange={onValueChange}
      onFocus={props.hideError}
      variant="outlined"
    />
  );
};

export default ProjectInput;
