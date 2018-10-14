import React from 'react';
import './Menu.css';

const Menu = ({onClickPrev, onClickNext}) => (
  <div>
    <a href="javascript:void(0)" onClick={onClickPrev}>prev</a>
    {" "}<a href="javascript:void(0)" onClick={onClickNext}>next</a>
  </div>
)

export default Menu;
