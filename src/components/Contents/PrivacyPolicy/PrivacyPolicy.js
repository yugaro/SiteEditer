import React from 'react';

import './PrivacyPolicy.css';

class PrivacyPolicy extends React.Component {
  render(){
    return(
      <div className="qualification-container">
        <div className="tctfl main-title">
          Privacy Policy
        </div>
        <div className='sub-title'>
          個人情報保護方針
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報保護の重要性の認識と取組みを徹底することにより、個人情報の保護を推進致します。
          </div>
        </div>
        <div className='sub-title'>
          個人情報の管理
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            ユーザーの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
          </div>
        </div>
        <div className='sub-title'>
          個人情報の利用目的
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            アプリ利用には、メールアドレスとパスワードによる登録が必要ですが、この認証情報は、ユーザーがアプリを利用することを可能にする目的以外では利用いたしません。メールアドレスに関しましては、アプリ運営者からのご連絡やご案内に使用する場合がございます。
          </div>
        </div>
        <div className='sub-title'>
          個人情報の第三者への開示・提供の禁止
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            当社は、ユーザーよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
            <ul>
              <li>
                ユーザーの同意がある場合
              </li>
              <li>
                ユーザーが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合
              </li>
              <li>
                法令に基づき開示することが必要である場合
              </li>
            </ul>
          </div>
        </div>
        <div className='sub-title'>
          個人情報の安全対策
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じます。
          </div>
        </div>
        <div className='sub-title'>
          ご本人の照会
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            ユーザーがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます
          </div>
        </div>
        <div className='sub-title'>
          法令、規範の遵守と見直し
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
          </div>
        </div>
        <div className='sub-title'>
          お問い合せ
        </div>
        <div className='timeline-content-container'>
          <div className="tctfl qualification-content">
            個人情報の取扱に関するお問い合せは onoue - at - hopf.sys.es.osaka-u.ac.jp までご連絡ください。
          </div>
        </div>
      </div>
    );
  };
}

export default PrivacyPolicy;
