import React, {useContext} from 'react'
import Context from './context'
import Counter from '../Counter'

function MultiCounter() {
  const {state, dispatch} = useContext(Context)
  const counterInfo = {
    count: state.count,
    incCount: () => dispatch({type: 'INCREMENT'}),
    decCount: () => dispatch({type: 'DECREMENT'})
  }
  return (
    <div>
      <Counter {...counterInfo}/>
      <Counter {...counterInfo}/>
    </div>
  )
}

export default MultiCounter
