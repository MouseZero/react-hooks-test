import React, {useReducer} from 'react'
import Counter from './Counter'

function ReducerExample () {
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
  }, {count: 0})
  return (
    <div style={{border: 'solid black 1px'}}>
      <h2>Reducer State</h2>
      <Counter
        count={state.count}
        decCount={() => dispatch({type: 'DECREMENT'})}
        incCount={() => dispatch({type: 'INCREMENT'})}
      />
    </div>
  )
}

export default ReducerExample
