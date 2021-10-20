import React from 'react';
import './Article.css'


class Article extends React.Component {
	// constructor(props) {
 //    super(props);
 //  }
 
  render(){
  	return(
  		<div className="article-container" id="Other">
  			<div className="tctfl main-title">
  				Article
  			</div>
  			<div className="article-wrapper">
  				<a href="https://qiita.com/yugaro/items/998750fa78b5efc79a9c" className="article-link">
  					<div className="btn article-image arti1"></div>
            <div className="tctfl artt1">Reactive Computer and Communication Technologies</div>
            <div className="tctfl artt2">For Network Control System Leaners</div>
  				</a>
  				<a href="https://qiita.com/yugaro/items/6d6dc8b7526b4ad30efd" className="article-link">
  					<div className="btn article-image arti2"></div>
            <div className="tctfl artt1">Reactive Computer and Communication Technologies</div>
            <div className="tctfl artt2">For Network Control System Leaners</div>
  				</a>
  				<a href="https://qiita.com/yugaro/items/a1273b67b867ccae5752" className="article-link">
  					<div className="btn article-image arti3"></div>
            <div className="tctfl artt1">Proactive Computer and Communication Technologies</div>
            <div className="tctfl artt2">For Network Control System Leaners</div>
  				</a>
  				<a href="https://qiita.com/yugaro/items/ab6e5ccd966942495985" className="article-link">
  					<div className="btn article-image arti4"></div>
            <div className="tctfl artt1">Control of Uncertain Models by BMI Approach</div>
            <div className="tctfl artt2">For Bilinear System Leaners</div>
  				</a>
          <a href="https://qiita.com/yugaro/items/b1d31587857b193141bb" className="article-link">
            <div className="btn article-image arti5"></div>
            <div className="tctfl artt1">Gaussian Processes for Learning Self-triggered Controller </div>
            <div className="tctfl artt2">For Network Control System and Machine Learning Leaners </div>
          </a>
          <a href="https://qiita.com/yugaro/items/a0b9030161a0478b25b1" className="article-link">
            <div className="btn article-image arti6"></div>
            <div className="tctfl artt1">Stability Analysis for Leaning-based MPC </div>
            <div className="tctfl artt2">For Network Control System and Machine Learning Leaners </div>
          </a>
  			</div>
  		</div>
  	);
  }
}


export default Article;