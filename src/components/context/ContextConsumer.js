import React, {useContext} from 'react'
import Counter from '../Counter'
import CounterContext from './CounterContext'

function ContextConsumer () {
  const counterContext = useContext(CounterContext)
  return(
    <div>
      <Counter {...counterContext}/>
    </div>
  )
}

export default ContextConsumer
