import React, {useState} from 'react'
import CounterContext from './CounterContext'
import MultiCounter from './MultiCounter'

function ContextExample () {
  const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{
      count: count,
      decCount: () => setCount(count - 1),
      incCount: () => setCount(count + 1)
    }}>
      <MultiCounter/>
    </CounterContext.Provider>
  )
}

export default ContextExample
