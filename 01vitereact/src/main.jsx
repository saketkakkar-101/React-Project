import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"

import App from './App.jsx'
// import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type : 'a',
//   props : {
//       href: 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const  anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target : '_blank' },
  'Click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
