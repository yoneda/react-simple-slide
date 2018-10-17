import React, { Component } from 'react';
import Menu from './Menu.js';
import Slide from './Slide.js';
import ProgressBar from './ProgressBar.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    const slides = ["aaa","bbb","ccc","ddd"];
    this.state = {
      pageNum: 0,
      pageMax: slides.length,
      slides: slides
    }
    this.addPageNum = this.addPageNum.bind(this);
    this.subPageNum = this.subPageNum.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.calcParcentage = this.calcParcentage.bind(this);
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
    console.log(this.state);
  }
  subPageNum(){
    const nowPageNum = this.state.pageNum;
    this.setState({pageNum:nowPageNum-1})
  }
  onKeyPressed(event){
    if(event.key === "ArrowRight") this.addPageNum();
    else if(event.key === "ArrowLeft") this.subPageNum();
  }
  calcParcentage(num,maxNum){
    const deci = parseFloat(num)/parseFloat(maxNum);
    const parcentage = Math.round(deci*100);
    return parcentage;
  }
  render() {
    return (
      <div className="App" onKeyDown={this.onKeyPressed} tabIndex="0">
        <Menu onClickNext={this.addPageNum} onClickPrev={this.subPageNum}/>
        <Slide text={this.state.slides[this.state.pageNum]}/>
        <ProgressBar parcentage={this.calcParcentage(this.state.pageNum+1,this.state.pageMax)}/>
      </div>
    );
  }
}

export default App;
