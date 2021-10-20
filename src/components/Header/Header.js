import React from 'react';
import './Header.css';
import HeaderAbove from './HeaderTwin/HeaderAbove.js';
import HeaderBottom from './HeaderTwin/HeaderBottom.js';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPosition: 0};
  }

  componentDidMount() {
    window.addEventListener('scroll', event => this.watchCurrentPosition(), true)
  }

  watchCurrentPosition() {
    this.setState({currentPosition: this.scrollTop()});
  }

  scrollTop() {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  }

  getWindowSize() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {
      width: width,
      height: height
    }
  }

  render() {
    let headerAbove;
    if(this.state.currentPosition <= this.getWindowSize().height * 0.8){
      headerAbove=(
        <HeaderAbove />
      );
    }

    let headerBottom;
    if(this.state.currentPosition > this.getWindowSize().height * 0.8){
      headerBottom=(
        <HeaderBottom />
      );
    }

    return (
     <div className="header">
      {headerAbove}
      {headerBottom}
    </div>
    );
  }
}

export default Header;
