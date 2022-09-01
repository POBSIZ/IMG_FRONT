import React, {
  useEffect,
  useState,
  useRef,
  ChangeEventHandler,
  FormEventHandler,
} from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions/index';
import axios from 'axios';
import { useCookies } from 'react-cookie';

import StyledTextInput from './textInput.styled';

import { Input } from 'Atoms';

export interface TextInputPropsType extends Partial<HTMLInputElement> {
  text: string;
  onChange: any;
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
        onChange={props.onchange}
      />
    </StyledTextInput>
  );
};

export default TextInput;
