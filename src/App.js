import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HeaderLockNote from './components/Header/HeaderLockNote'
import Footer from './components/Footer/Footer';
import Main from './views/Main';
import Release from './views/Release';
import ScrollToTop from './components/Contents/ScrollToTop/ScrollToTop';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={Header} />
            <Route exact path="/" component={Main} />
            <Route exact path="/locknote" component={HeaderLockNote} />
            <Route exact path="/locknote" component={Release} />
          </ScrollToTop>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
