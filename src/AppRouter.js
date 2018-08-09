import React from 'react';
import { BrowserRouter as Router, Route, Switch } from
    'react-router-dom';
import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;
const Login = Loadable({
    loader: () => import('./LoginForm'),
    loading: Loading,
});
const Home = Loadable({
    loader: () => import('./Home'),
    loading: Loading,
});
class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Header logged={true} onClick={(e) => { }} />
                <Router>
                    <Switch>
                        <Route key={1} exact path="/" component={Home} />
                        <Route key={2} path="/login" component={Login} />
                        <Route key={2} path="/account" component={Account} />
                        <Route key={2} path="/account/rules" component={AccountRule} />
                        <Route key={2} path="/Help" component={Help} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default AppRouter;