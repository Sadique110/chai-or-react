// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Card from './component/Card'
function App() {
  return (
    <>
     <div className="flex justify-center items-center h-screen">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Welcome to Vite + React
        </button>
        <Card username = "sadique110" btnText="click me"/><br>
        </br>
        <Card username = "john_doe" btnText="Follow"/>
      </div>

      
    </>
  )
}

export default App
