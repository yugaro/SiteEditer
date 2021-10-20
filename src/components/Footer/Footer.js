import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faBars} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMouseOver_mail: false};
    this.state = {isMouseClick_mail: false};
    this.state = {currentPosition: 0};
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

  render() {
    let mailIconText;
    if (this.state.isMouseOver_mail){
      mailIconText=(
        <p className="fmf fmf_c1">Click to copy my email address to your clipboard</p>
      );
    }

    let mailIconText2;
    if (this.state.isMouseClick_mail){
      mailIconText2=(
        <p className="fmf fmf_c2">Copied!!</p>
      );
    }

    return (
      <div className='footer'>
        <div className='footer-wrapper'>
          <div className='tctfl footer-title'>
           Contact
          </div>
          <div className='footer-container'>
            <botton className = "btn icon-wrap">
              <FontAwesomeIcon icon={faEnvelope} className="top-icon-item-color icon-envelope"
                onMouseOver={()=> this.handleMailOver()}
                onMouseOut={()=>this.handleMailOut()}
                onClick={()=>this.handleClickMail()}
              />
            </botton>
            {mailIconText}
            {mailIconText2}
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

export default Footer;
