import React, {Component} from 'react';
import ReactDom from 'react-dom';

import App from './components/app.js';

class Main extends Component {
  render() {
    return (
        <App />
    );
  }
}

ReactDom.render(<Main/>, document.getElementById('root'));