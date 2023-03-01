import { TODO_UPDATE } from './types'

const INITIAL_STATE = {
  todolist: [{
    todo: 'todo item 1',
    completed: false
  }, {
    todo: 'todo item 2',
    completed: false
  }, {
    todo: 'todo item 3',
    completed: true
  }]
}

const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case TODO_UPDATE:
      return {
        ...state,
        todolist: payload
      }
    default:
      return state
  }
}

export default todoReducer
