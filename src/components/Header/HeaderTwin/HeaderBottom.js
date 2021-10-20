import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faWindowClose, faAddressCard} from "@fortawesome/free-regular-svg-icons";
import { faBars, faLaptopCode, faUserGraduate, faGlobe, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './HeaderBottom.css';


class HeaderBottom extends React.Component {
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
    this.setState({isMouseClick_mail: false});
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

    let menu_modal;
    if (this.state.isMouseClick_menu){
      menu_modal=(
        <div className='modal'>
          <div className='modal-inner modal-inner-font'>
          <botton className="btn2">
            <FontAwesomeIcon
              icon={faWindowClose}
              className="top-icon-item-color icon-windowclose"
              onClick={() => this.handleClickMenuClose()}
            />
          </botton>
          <AnchorLink className="btn2 modal-item" href="#AboutMe" onClick={() => this.handleClickMenuClose()}> <FontAwesomeIcon icon={faAddressCard}/> About Me</AnchorLink>
          <div className="modal-line"></div>
          <AnchorLink className="btn2 modal-item" href="#Specialty&Skill" onClick={() => this.handleClickMenuClose()}> <FontAwesomeIcon icon={faLaptopCode}/>   Specialty & Skill</AnchorLink>
          <AnchorLink className="btn2 modal-item" href="#Education" onClick={() => this.handleClickMenuClose()}><FontAwesomeIcon icon={faUserGraduate}/>  Education</AnchorLink>
          <AnchorLink className="btn2 modal-item" href="#WorkExperience" onClick={() => this.handleClickMenuClose()}><FontAwesomeIcon icon={faGlobe}/>  Work Experience</AnchorLink>
          <AnchorLink className="btn2 modal-item" href="#Other" onClick={() => this.handleClickMenuClose()}><FontAwesomeIcon icon={faNewspaper}/> Other</AnchorLink>
          </div>
        </div>
      );
    }

    return (
      <div className="App-header-top-containter">
        <div className="top-containter-wrapper">
          <botton className="btn">
            <FontAwesomeIcon
              icon={faBars}
              className="menu-icon menu-icon-color"
              onClick={() => {this.handleClickMenu()}}
            />
          </botton>
          {menu_modal}
          <div className="App-header-top-containter-left">
            <AnchorLink className="top-title-wrap btn2" href="#AboutMe">About Me</AnchorLink>
            <AnchorLink className="top-title-wrap btn2" href="#Specialty&Skill">Specialty & Skill</AnchorLink>
            <AnchorLink className="top-title-wrap btn2" href="#Education">Education</AnchorLink>
            <AnchorLink className="top-title-wrap btn2" href="#WorkExperience">Work Experience</AnchorLink>
            <AnchorLink className="top-title-wrap btn2" href="#Other">Other</AnchorLink>
          </div>
          <div className="App-header-top-containter-right">
            <botton className = "btn top-icon-wrap mail_icon_wrapper">
              <FontAwesomeIcon icon={faEnvelope} className="top-icon-item-color icon-envelope"
                onMouseOver={()=> this.handleMailOver()}
                onMouseOut={()=>this.handleMailOut()}
                onClick={()=>this.handleClickMail()}
              />
              {mailIconText}
              {mailIconText2}
            </botton>
            <a href = "https://github.com/yugaro" className = "btn top-icon-wrap">
              <FontAwesomeIcon icon={faGithub} className="top-icon-item-color icon-github"/>
            </a>
            <a href = "https://www.instagram.com/garoyugaro/" className = "btn top-icon-wrap" >
              <FontAwesomeIcon icon={faInstagram} className="top-icon-item-color icon-instagram"/>
            </a>
            <a href = "https://twitter.com/garoyugaro/" className = "btn top-icon-wrap" >
              <FontAwesomeIcon icon={faTwitter} className="top-icon-item-color icon-twitter"/>
            </a>
            <a href = "https://www.linkedin.com/in/yuga-onoue-8934531a8/" className = "btn top-icon-wrap" >
              <FontAwesomeIcon icon={faLinkedin} className="top-icon-item-color icon-linkedin"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBottom;
