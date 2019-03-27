import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './app/home/HomePage'
import { Container } from 'react-bootstrap'

const App = () => (
  <React.Fragment>
<Route path='/' component={HomePage} />
  </React.Fragment>
)

export default App;
