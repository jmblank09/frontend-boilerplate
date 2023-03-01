import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from './actions'

const useTodoStore = () => {
  const state = useSelector(state => state.todoReducer)
  const content = useMemo(() => {
    return state
  }, [state])

  const dispatch = useDispatch()
  
  const todoAdd = useCallback((todo) => dispatch(actions.todoAdd(todo)), [dispatch])
  const todoRemove = useCallback((index) => dispatch(actions.todoRemove(index)), [dispatch])
  const todoToggle = useCallback((index) => dispatch(actions.todoToggle(index)), [dispatch])

  return {
    ...content,
    todoAdd,
    todoRemove,
    todoToggle
  }
}

export default useTodoStore
