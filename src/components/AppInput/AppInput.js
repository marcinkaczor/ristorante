import React from 'react';
import { Input, Label } from 'reactstrap';

const appInput = (props) => {
  let inputElement = null;
  let validFlag = props.valid && props.shouldValidate && props.touched ? true : false;
  let invalidFlag = props.invalid && props.shouldValidate && props.touched ? true : false;
  switch (props.elementType) {
    case ('input'):
      inputElement = <Input
        onChange={props.changed}
        {...props.elementConfig}
        value={props.value}
        valid={validFlag}
        invalid={invalidFlag} />;
      break;
    case ('select'):
      inputElement = (
        <Input onChange={props.changed} {...props.elementConfig} value={props.value} >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </Input>
      );
      break;
    default:
      inputElement = <Input {...props.elementConfig} value={props.value} />;
  }
  return (
    <div>
      <Label>{props.label}</Label>
      {inputElement}
    </div>
  );
};

export default appInput;