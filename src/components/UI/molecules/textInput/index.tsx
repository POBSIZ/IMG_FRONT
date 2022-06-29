import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import StyledTextInput from './textInput.styled';

import { Input } from 'Atoms';

export interface TextInputPropsType extends Partial<HTMLInputElement> {
  text: string;
  onChange: Function;
}

const TextInput: React.FC<TextInputPropsType> = (props) => {
  return (
    <StyledTextInput {...props}>
      <span className="text">{props.text}</span>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        required={props.required}
        onchange={props.onchange}
      />
    </StyledTextInput>
  );
};

export default TextInput;