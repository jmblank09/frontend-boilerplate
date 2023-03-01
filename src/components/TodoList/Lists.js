import React from 'react'
import useTodoStore from 'redux/todo/useTodoStore'
import * as styled from './styled'
import { IconSettings, Icon } from '@salesforce/design-system-react'
import { Checkbox } from 'components/Form'

const Lists = () => {
  const { todolist, todoRemove, todoToggle } = useTodoStore()

  return (
    <IconSettings iconPath='/icons'>
      <styled.Items>
        <styled.Item header>
          <styled.ListText>You have {todolist.length} todos.</styled.ListText>
        </styled.Item>
        {
          todolist.map((item, index) => {
            return (
              <styled.Item key={`todo-${index}`}>
                <styled.ListText completed={item.completed} onClick={() => todoToggle(index)}>
                  <Checkbox 
                    checked={item.completed} 
                    styled={{cursor: 'pointer'}} 
                    onChange={() => todoToggle(index)}
                  /> 
                  { item.todo }
                </styled.ListText>
                <styled.ListIcon onClick={() => todoRemove(index)}>
                  <Icon
                    assistiveText={{ label: 'Lead' }}
                    category='utility'
                    colorVariant='warning'
                    name='close'
                    size='xx-small'
                  />
                </styled.ListIcon>
              </styled.Item>
            )
          })
        }
      </styled.Items>
    </IconSettings>
  )
}

export default React.memo(Lists)