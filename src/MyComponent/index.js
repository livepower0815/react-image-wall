import React, { Component } from 'react';
import './test.css';

const num = '12345'

class MyComponent extends Component {
  render(){
    return (
      <h2>this is test {num}</h2>
    )
  }
}

export default MyComponent ;