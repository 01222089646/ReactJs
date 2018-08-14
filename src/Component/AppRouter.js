import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import LoginForm from './LoginForm'


class AppRouter extends React.Component {
    
    render() {
      return (
        <div className="AppRouter">
         <Router>
              <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={LoginForm}/>            
              
              </Switch>
          </Router>
        </div>
      );
    }
  }
export default AppRouter;
