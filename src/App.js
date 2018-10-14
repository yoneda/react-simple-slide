import React, { Component } from 'react';
import Menu from './Menu.js';
import Slide from './Slide.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu onClickNext={()=>console.log("aa")} onClickPrev={()=>console.log("bb")}/>
        <Slide text={"hello"} />
      </div>
    );
  }
}

export default App;
