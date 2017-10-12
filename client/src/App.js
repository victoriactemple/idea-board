import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import HomePage from './components/home/HomePage'
import IdeaPage from './components/idea/IdeaPage'
import LoginPage from './components/login/LoginPage'

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <div>
           <Link to ="/">Home</Link>
           </div>
           <div>
           <Link to ="/login">Login</Link>
           </div>
          
          <div>
           <Link to ="/idea">Idea</Link>
         </div>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/user" component={IdeaPage} />
              <Route exact path="/login" component={LoginPage} />
          </Switch>

       </div>
     </Router>
    );
  }
}

export default App;
