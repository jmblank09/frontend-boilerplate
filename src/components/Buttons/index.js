import { Button } from '@salesforce/design-system-react'
import styled from 'styled-components'

export const ButtonLink = styled(Button)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: 0;
  border: 0;

  &:hover {
    text-decoration: underline;
    background: transparent;
  }
`
