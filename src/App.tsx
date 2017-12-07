import * as React from 'react';
import {Provider} from 'mobx-react';
import {Switch, Route, Router} from 'react-router-dom';
import './App.css';
import Com from './components/Com';
import DevTools from 'mobx-react-devtools';
import stores from './stores/index';
import Navigation from './stores/Navigation';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={Navigation.history}>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Switch>
              <Route path={'/'} render={() => <h1>HomeScreen</h1>} exact/>
              <Route path={'/about'} render={() => <h1>About-Screen</h1>} exact/>
            </Switch>
            <Com/>
            <DevTools/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;