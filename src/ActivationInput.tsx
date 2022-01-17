import styled from '@emotion/styled';
import { forwardRef, InputHTMLAttributes } from 'react';

interface ActivationInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const ActivationInput = forwardRef<
  HTMLInputElement,
  ActivationInputProps
>((props, ref) => {
  return <Input ref={ref} {...props} />;
});

const Input = styled.input`
  // Input is hidden because it's value is distributed among cells
  opacity: 0;
`;
