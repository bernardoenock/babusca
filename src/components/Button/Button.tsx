import React from "react"

import styled from 'styled-components'

// Typagem interface
interface ButtonProps {
  variant?: 'primary' | 'accent'
  disabled?: boolean
  children: React.ReactNode
}

// Styled
const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;

  /* theme */
  ${({ theme, variant }) => {
    /* console.log(theme); */
    return {
      backgroundColor: theme.colors[variant].main,
      color: theme.colors[variant].text,
      ':hover': {
        backgroundColor: theme.colors[variant].light,
      },
      ':focus': {
        backgroundColor: theme.colors[variant].dark,
      },
    };
  }}
`

// Component
export default function Button({children, ...props}: ButtonProps) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

// Seta values default
Button.defaultProps = {
  variant: 'primary',
  disabled: false
}
