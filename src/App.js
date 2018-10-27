import React from 'react';
import './App.css';

import ReducerExample from './components/ReducerExample'
import StateExample from './components/StateExample'
import ContextExample from './components/context/ContextExample'
import ReduxReplaceExample from './components/redux/ReduxReplaceExample'

function App () {
  return (
    <React.Fragment>
      <StateExample/>
      <ReducerExample/>
      <ContextExample/>
      <ReduxReplaceExample/>
    </React.Fragment>
  )
}

export default App;
