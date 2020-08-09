import React, { InputHTMLAttributes } from 'react';

// import './styles.css';
import {Container, InputTag, Label} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  name: string;
}

const Input:React.FC<InputProps> = ({label, name, ...rest}) => {

  return(
    <Container>
      <Label>{label}</Label>
      <InputTag type="text" id={name} {...rest} />
    </Container>
  );
}

export default Input;