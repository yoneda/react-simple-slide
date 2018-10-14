import React, { Component } from 'react';
import Menu from './Menu.js';
import Slide from './Slide.js';
import './App.css';

let state = {
  pageNum: 0,
  slides: ["aaa","bbb","ccc","ddd"]
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum: 0,
      slides: ["aaa","bbb","ccc","ddd"]
    }
    this.addPageNum = this.addPageNum.bind(this);
    this.subPageNum = this.subPageNum.bind(this);
  }
  addPageNum(){
    const nowPageNum = this.state.pageNum;
    this.setState({pageNum:nowPageNum+1})
  }
  subPageNum(){
    const nowPageNum = this.state.pageNum;
    this.setState({pageNum:nowPageNum-1})
  }
  render() {
    return (
      <div className="App">
        <Menu onClickNext={this.addPageNum} onClickPrev={this.subPageNum}/>
        <Slide text={this.state.slides[this.state.pageNum]}/>
      </div>
    );
  }
}

export default App;
