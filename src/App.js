import React, { useState } from 'react'
import ApolloClient from 'apollo-boost'

import './App.css'
import logo from './logo.svg'

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql'
})

const LambdaDemo = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleClick = () => {
    setLoading(true)
    fetch('/.netlify/functions/')
      .then((response) => response.json())
      .then((json) => {
        setMessage(json.msg)
        setLoading(false)
      })
  }

  return (
    <div>
      <button onClick={() => handleClick()}>
        {loading ? 'Loading...' : 'Call Lambda'}
      </button>
      <br />
      <span>{message}</span>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo />
      </header>
    </div>
  )
}

export default App
