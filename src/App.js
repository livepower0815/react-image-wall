import React, { Component } from 'react';
import './App.css';
// import Test from './MyComponent';

const lists = ['aaa','bbb','ccc','ddd'];



class App extends Component {
  alertHTMLContent(e){
    console.log(e.target.innerHTML);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <ul>
          {lists.map((result,index)=>{
            return (<li key={index} onClick={this.alertHTMLContent}>{result}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default App;
