import React, { PureComponent } from 'react'
import "./App.css"
import Concept from './Concepts/Concept'
import SimpleCounterComponent from './Components/SimpleCounterComponent'
import PureCounterComponent from './Components/PureCounterComponent'

const App = () => {
  return (
    <div>
      {/* <Concept /> */}
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  )
}

export default App
