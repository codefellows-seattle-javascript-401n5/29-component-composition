import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './styles/index.css';


import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';

class Main extends Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDom.render(<Main />, document.getElementById('root'));