// React Core
import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { Router, Route, Link } from 'react-router';
// React Redux
import { Provider, connect } from 'react-redux';
// Redux Devtools
import DevTools from './containers/DevTools';

import App from "./containers/App";
import configureStore from "./store";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Router>
          <Route path="/" component={App}/>
        </Router>
        <DevTools />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
