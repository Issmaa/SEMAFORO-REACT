import React from 'react'
import style from './style.module.scss';

function Light({color, changeLight, colors, removeLight, index}) {

   

  return (
    <div id={index} className={style.light} style={{backgroundColor: color === colors[changeLight] ? colors[changeLight] : "white"}}
    onClick={(e) => removeLight(e)}
    defaultValue={color}>
    </div>
  )
}

export default Light
