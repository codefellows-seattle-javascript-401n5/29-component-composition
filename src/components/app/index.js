import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Dashboard from '../dashboard';


export default class App extends Component {
  render() {
    return(
      <Fragment>
        <BrowserRouter>
          <Fragment>
            <div>
              <Dashboard/>
            </div>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    );
  }
}