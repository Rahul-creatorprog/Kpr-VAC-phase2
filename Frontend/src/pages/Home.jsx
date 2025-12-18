import React from 'react'
import State from '../hooks/State'
import User from '../components/User'
import Form from '../hooks/Form'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Form/>
      <State/>
      <User name="Rahul"/>
      <User Age="19"/>
    </div>
  )
}

export default Home