import React from 'react'
import ReactDOM from 'react-dom/client' 
import App from './App.jsx'
import Chai from './chai.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom react | Chai</h1>
    </div>
  )
  
}
const ReactElement ={
  type: 'a',
  props: {href: 'https://google.com',
          target: '_blank'
        },
  childrent: 'click me to visit google'
}
      
const anotherElement = React.createElement(
  <a href='https://google.com' target ='_blank'>visit google </a>)



const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google')

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  reactElement
)