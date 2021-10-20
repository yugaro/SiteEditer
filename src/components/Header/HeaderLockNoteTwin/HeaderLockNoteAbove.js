import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import LockNoteIconw from '../../Contents/image/LockNoteIconw.svg';
import './HeaderLockNoteAbove.css';

class HeaderLockNoteAbove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMouseOver_mail: false};
    this.state = {isMouseClick_mail: false};
    this.state = {currentPosition: 0};
    this.state = {isMouseClick_menu: false};
  }

  handleMailOver(){
    this.setState({isMouseOver_mail: true});
  }

  handleMailOut(){
    this.setState({isMouseOver_mail: false});
  }

  handleClickMail(){
    this.setState({isMouseClick_mail :true});
    this.setState({isMouseOver_mail: false});
    var textField = document.createElement('textarea')
    textField.innerText = 'onoue@hopf.sys.es.osaka-u.ac.jp'
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy');
    textField.remove()
  }

  handleClickMenu() {
    this.setState({isMouseClick_menu: true});
  }

  handleClickMenuClose() {
    this.setState({isMouseClick_menu: false});
  }

  render() {
    let mailIconText;
    if (this.state.isMouseOver_mail){
      mailIconText=(
        <p className="mail_fukidashi">Click to copy my email address to your clipboard</p>
      );
    }

    let mailIconText2;
    if (this.state.isMouseClick_mail){
      mailIconText2=(
        <p className="mail_fukidashi2">Copied!!</p>
      );
    }

    return (
      <div className="App-header-top-containter2">
      <div className="top-containter-wrapper">
        <div className="App-header-top-containter-left2">
          <a href="https://yugaro.com/" className = "btn top-icon-wrap lockiconwrapper">
            <img alt="" src={LockNoteIconw} className="locknoteiconlabel2" />
          </a>
        </div>
        <div className="App-header-top-containter-right">
          <botton className = "btn top-icon-wrap mail_icon_wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="top-icon-item"
              onMouseOver={()=> this.handleMailOver()}
              onMouseOut={()=>this.handleMailOut()}
              onClick={()=>this.handleClickMail()}
            />
            {mailIconText}
            {mailIconText2}
          </botton>
          <a href = "https://github.com/yugaro" className = "btn top-icon-wrap">
            <FontAwesomeIcon icon={faGithub} className="top-icon-item"/>
          </a>
          <a href = "https://www.instagram.com/garoyugaro/" className = "btn top-icon-wrap" >
            <FontAwesomeIcon icon={faInstagram} className="top-icon-item"/>
          </a>
          <a href = "https://twitter.com/garoyugaro/" className = "btn top-icon-wrap" >
            <FontAwesomeIcon icon={faTwitter} className="top-icon-item"/>
          </a>
          <a href = "https://www.linkedin.com/in/yuga-onoue-8934531a8/" className = "btn top-icon-wrap" >
            <FontAwesomeIcon icon={faLinkedin} className="top-icon-item"/>
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default HeaderLockNoteAbove;
