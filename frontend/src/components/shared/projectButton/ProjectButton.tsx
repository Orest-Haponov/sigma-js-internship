import React from 'react';
import { IButton } from '../../../Interface/Interface';
import './projectButton.scss';

const ProjectButton: React.FC<IButton> = props => {
  return (
    <button onClick={props.btnAction} className={props.btnClass}>
      {props.label}
    </button>
  );
};

export default ProjectButton;
