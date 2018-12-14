import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-chevron-left" ></i>
    </div>
  );
}

export default LeftArrow;
