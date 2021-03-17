import React, { useState } from 'react'
import ApolloClient from 'apollo-boost'
import { gql, InMemoryCache } from '@apollo/client'

import './App.css'

import logo from './logo.svg'

const client = new ApolloClient({
  uri: '/.netlify/functions/graphql',
  cache: new InMemoryCache()
})

const helloQuery = gql`
  query {
    hello
  }
`

const LambdaDemo = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleClick = async () => {
    try {
      setLoading(true)

      // const response = await fetch('/.netlify/functions/graphql')
      // const { url } = response
      // const newMessage = url || 'Ha ocurrido un error, vuelva a intentarlo.'

      const response = await client.query({
        query: helloQuery
      })

      console.log(response)

      return null

      // setMessage(newMessage)
      // setLoading(false)
    } catch (error) {
      return null
    }
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
        <LambdaDemo />
      </header>
    </div>
  )
}

export default App
