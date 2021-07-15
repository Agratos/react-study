import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from 'pages/Main/Main';
import NotFound from 'pages/NotFound/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
