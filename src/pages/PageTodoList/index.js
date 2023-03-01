import React from 'react'
import { IconSettings } from '@salesforce/design-system-react'

import TodoList from 'components/TodoList'

const PageTodoList = () => {
  return (
    <IconSettings iconPath="/icons">
      <h1>Todolist Page (redux implemented)</h1>
      <TodoList />
    </IconSettings>
  )
}

export default PageTodoList
