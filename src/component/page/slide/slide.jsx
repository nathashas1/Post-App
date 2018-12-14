import React from 'react'


const Slide = ({ image,title }) => {
  return (<div className="slide">
    <img src={image} className="slideimg" alt=""/>
    <div className="imgtitle">{title}</div>
  </div>
)}

export default Slide
