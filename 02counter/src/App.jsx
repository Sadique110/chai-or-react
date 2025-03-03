import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue = () => {
    if (counter <= 19) {
      counter += 1;
    }
    
    setCounter(counter)
  }
  const removeValue = () => {
    if (counter >= 1) {
      counter -= 1;
    }

    setCounter(counter)
  }
  return (
    <>
      <h1>chai or react</h1>
      <h1>Counter value: {counter}</h1>

      <button onClick={addValue}> add counter: {counter}</button>
      <button onClick={removeValue}>remove counter: {counter}</button>
    </>
  )
}

export default App
