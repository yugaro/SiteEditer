import React from 'react';
import './LockNoteContents.css';
import LockNoteIcon from '../image/LockNoteIcon.png';

class LockNoteContents extends React.Component {
  render(){
    return(
      <div className='about-me-container' id="AboutMe">
        <img src={LockNoteIcon} class='about-me-icon' alt='MyFace'/>
        <div className='about-me-main'>
          <div className='tctfl main-title'>
          Lock Note
          </div>
          <div className='tctfl about-me-contents'>
            自分専用のメモを作成、保存、編集できるモバイルアプリケーションです。
            自分のメールアドレスとメモ情報を結びつけ、クラウドにデータを保存します。
            保存したデータはいつでも取り出すことが可能です。
            問い合わせはメールアドレスまでお願い致します。
            </div>
        </div>
	    </div>
    );
  };
}

export default LockNoteContents;
