import React from 'react'
import PropTypes from 'prop-types'

function Counter ({count, decCount, incCount}) {
  return (
    <React.Fragment>
      <div>
        {count}
      </div>
      <div>
        <button onClick={incCount}>+</button>
        <button onClick={decCount}>-</button>
      </div>
    </React.Fragment>
  )
}
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  decCount: PropTypes.func.isRequired,
  incCount: PropTypes.func.isRequired
}

export default Counter
