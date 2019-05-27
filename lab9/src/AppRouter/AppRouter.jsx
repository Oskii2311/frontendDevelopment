import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarForm from '../containers/CarForm/CarForm';
import Main from '../containers/Main/Main';
import Header from '../components/Header/Header';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/edit-car/:id" component={CarForm} />
                    <Route exact path="/create-car" component={CarForm} />
                    <Route exact path="/" component={Main} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
