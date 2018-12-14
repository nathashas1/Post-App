import React, { Component } from 'react'
import Slide from './slide'
import LeftArrow from './left_arrow'
import RightArrow from './right_arrow'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        "http://zenandsomething.files.wordpress.com/2014/06/day7-131.jpg?w=356&h=236",
        "http://www.tuppensmarine.com/photos/model/large/77df3056e7a2d6a9fa06f288d69ace8.jpg",
        "http://www.tuppensmarine.com/photos/model/large/248ba47d5ee372211e60aaf943aa322.jpg",
      ],
      currentIndex: 0
    }

  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 2){
        this.setState({currentIndex: 0})
    }else{
      this.setState({currentIndex: this.state.currentIndex+1})
    }
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === 0){
        this.setState({currentIndex: 2})
    }else{
    this.setState({currentIndex: this.state.currentIndex-1})
    }
  }

  render() {
    return (
      <div className="slider">
            <Slide key={this.state.currentIndex} image={this.state.images[this.state.currentIndex]} />
        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}
