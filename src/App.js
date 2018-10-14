import React, { Component } from 'react';
import Menu from './Menu.js';
import Slide from './Slide.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageNum: 0,
      slides: ["aaa","bbb","ccc","ddd"]
    }
    this.addPageNum = this.addPageNum.bind(this);
    this.subPageNum = this.subPageNum.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }
  componentDidMount(){
    document.addEventListener("keydown",this.onKeyPressed);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown",this.onKeyPressed);
  }
  addPageNum(){
    const nowPageNum = this.state.pageNum;
    this.setState({pageNum:nowPageNum+1})
  }
  subPageNum(){
    const nowPageNum = this.state.pageNum;
    this.setState({pageNum:nowPageNum-1})
  }
  onKeyPressed(event){
    if(event.key === "ArrowRight") this.addPageNum();
    else if(event.key === "ArrowLeft") this.subPageNum();
  }
  render() {
    return (
      <div className="App" onKeyDown={this.onKeyPressed} tabIndex="0">
        <Menu onClickNext={this.addPageNum} onClickPrev={this.subPageNum}/>
        <Slide text={this.state.slides[this.state.pageNum]}/>
      </div>
    );
  }
}

export default App;
