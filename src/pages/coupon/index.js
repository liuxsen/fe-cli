import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';

// css
import '../../static/css/atom-common.css';
import '../../static/css/atom-pc.css';
import '../../static/css/atom-pc.1.min.css';
import '../../static/css/atom-pc.2.min.css';
import '../../static/css/atom-pc.3.min.css';
import '../../static/css/atom-pc.4.min.css';

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}