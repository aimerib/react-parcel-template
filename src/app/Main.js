import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MyComponent from './components/MyComponent'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <MyComponent />
        </h1>
      </div>
    )
  }
}
        
