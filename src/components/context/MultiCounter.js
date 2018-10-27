import React from 'react'
import ContextConsumer from './ContextConsumer'

function MultiCounter() {
  return (
    <div style={{border: 'solid black 1px'}}>
      <h2>Context</h2>
      <ContextConsumer/>
      <ContextConsumer/>
    </div>
  )
}

export default MultiCounter
