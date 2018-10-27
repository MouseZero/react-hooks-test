import React, {useState} from 'react'
import Counter from './Counter'

function StateExample () {
  const [value, setValue] = useState(0)
  return (
    <div style={{border: 'solid black 1px'}}>
      <h2>State</h2>
      <Counter
        count={value}
        decCount={() => setValue(value - 1)}
        incCount={() => setValue(value + 1)}
      />
    </div>
  )
}

export default StateExample
