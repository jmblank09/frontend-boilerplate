import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 500px;
  width: 100%;
`
export const Items = styled.ul`
  display: block;
  box-shadow: 0px 0px 10px -4px #888888;
`
export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #EEE;
`
export const ListText = styled.span`
  display: flex;
  flex: 1;
  text-decoration: ${props => props.completed? 'line-through' : 'none'};
  cursor: pointer;
`
export const ListIcon = styled.span`
  width: 20px;
  cursor: pointer;
`
export const Bottom = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 10px -4px #888888;
`
export const InputWrapper = styled.div`
  flex: 1;
`
export const ButtonWrapper = styled.div`
  width: 140px;
`
