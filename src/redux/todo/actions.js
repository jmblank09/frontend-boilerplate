import { TODO_UPDATE } from './types'

export const todoAdd = (todo) => {
  return async (dispatch, getState) => {
    const todolist = [...getState().todoReducer.todolist]
    todolist.push({
      todo,
      completed: false
    })

    dispatch({
      type: TODO_UPDATE,
      payload: todolist
    })
  }
}

export const todoRemove = (index) => {
  return async (dispatch, getState) => {
    const todolist = [...getState().todoReducer.todolist]
    todolist.splice(index, 1)
    
    dispatch({
      type: TODO_UPDATE,
      payload: todolist
    })
  }
}

export const todoToggle = (index) => {
  return async (dispatch, getState) => {
    const todolist = [...getState().todoReducer.todolist]
    todolist[index] = {
      ...todolist[index],
      completed: !todolist[index].completed
    }

    dispatch({
      type: TODO_UPDATE,
      payload: todolist
    })
  }
}