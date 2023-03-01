import React, { useState } from 'react'
import useTodoStore from 'redux/todo/useTodoStore'
import * as styled from './styled'
import { IconSettings, Button } from '@salesforce/design-system-react'
import { Input } from 'components/Form'

const AddForm = () => {
  console.log('<Form> Rendered')
  const { todoAdd } = useTodoStore()
  const [todo, setTodo] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    todoAdd(todo)
    setTodo('')
  }
  
  return (
    <IconSettings iconPath='/icons'>
      <form onSubmit={handleFormSubmit}>
        <styled.Bottom>
          <styled.InputWrapper>
            <Input 
              onChange={(e) => {
                setTodo(e.target.value)
              }}
              value={todo}
            />
          </styled.InputWrapper>
          <styled.ButtonWrapper>
            <Button
              iconCategory='utility'
              iconName='add'
              iconPosition='right'
              label='Add Todo'
              variant='brand'
              styled={{width: '100%'}}
              type='submit'
            />
          </styled.ButtonWrapper>
        </styled.Bottom>
      </form>
    </IconSettings>
  )
}

export default React.memo(AddForm)