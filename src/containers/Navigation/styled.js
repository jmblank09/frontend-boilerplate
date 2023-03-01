import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const UL = styled.ul`
  padding: 0;
  list-style: disc
`
export const LI = styled.li`
  margin: 0 0 0 20px;
  padding: 0;
`
export const MenuLink = styled(NavLink)`
  &.${props => props.activeClassName} {
    text-decoration: underline;
  }
`