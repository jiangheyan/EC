import React from 'react';
import { render } from 'react-dom';
import { AppSearch } from './containers';
import { Router, Route, BrowserRouter } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

let root = document.getElementById('app');

render((
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={App}/>
        <Route path="/AppSearch" component={AppSearch}/>
    </div>
  </Router>
  ), root);


// render((
//     <Router history = {BrowserRouter}>
//         <Router path="/" component = {App} />
//     </Router>
// ), document.getElementById('content'));
