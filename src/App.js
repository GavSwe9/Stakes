import './App.css';
import './tailwind.css'

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from './Components/Layout'
// import { Scoreboard } from './Components/Scoreboard'
import { Optimizer } from './Components/Optimizer'
import { NoMatch } from './Components/NoMatch'


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            {/* <Route path="/scoreboard" component={Scoreboard} /> */}
            <Route exact path="/Optimizer" component={Optimizer} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
