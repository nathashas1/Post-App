import React, { Component } from 'react'
import Slide from './slide'
import LeftArrow from './left_arrow'
import RightArrow from './right_arrow'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      currentIndex: 0
    }
  }

  componentDidMount() {
    this.getJson().then(res => {
      this.setState({images: res},
      )
    })
  }

  goToPrevSlide = () => {
    this.setState({currentIndex: this.state.currentIndex-1})
  }

  goToNextSlide = () => {
    this.setState({currentIndex: this.state.currentIndex+1})
  }

  async getJson() {
    const res = await fetch("/slideshow.json");
    return await res.json();
  }



  render() {
    const leftArrow = this.state.currentIndex <= 0 ?
      "" : (<LeftArrow
       goToPrevSlide={this.goToPrevSlide}
       hidden={this.state.currentIndex}
      />)

      const rightArrow = this.state.currentIndex >= this.state.images.length - 1 ?
        "" : (<RightArrow
         goToNextSlide={this.goToNextSlide}
         hidden={this.state.currentIndex}
        />)

    const image = this.state.images.length === 0 ? "" : this.state.images[this.state.currentIndex]
    return (
      <div className="slider">
        {leftArrow}
        <Slide  key={this.state.currentIndex} image={image.url} title={image.title}/>
        {rightArrow}
      </div>
    );
  }
}
