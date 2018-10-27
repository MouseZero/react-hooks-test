import React, {useReducer} from 'react'
import context from './context'
import MultiCounter from './MultiCounter'

function ReduxReplaceExample () {
  const [state, dispatch] = useReducer((state, action) => {
    console.log('Action: ', action)
    switch(action.type) {
      case 'INCREMENT':
        return {count: state.count + 1}
      case 'DECREMENT':
        return {count: state.count - 1}
      default:
        return state
    }
  }, {
    count: 0
  })
  return (
    <div style={{border: 'solid black 1px'}}>
      <h2>Context with reducer (Redux Replacement)</h2>
      <context.Provider value={{
        state,
        dispatch
      }}>
        <MultiCounter/>
      </context.Provider>
    </div>
  )
}

export default ReduxReplaceExample
