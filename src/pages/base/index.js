import React from 'react';
import './index.scss';

import {
  Route,
  Redirect,
  Switch,
  useLocation
} from "react-router-dom";

import Topbar from '../../components/topbar/index';
import Work from '../../pages/work/index';
import About from '../../pages/about/index';
import Portfolio from '../../pages/portfolio/index';
import Error from '../../pages/error/index';

function App() {
  return (
    <div className="body-container">
      <Topbar/>
      <div className="content-container">
      <Switch>
        <Redirect exact from='/' to='/work' />
        {/* {Page()} */}
        <Route path='/work'>
          <Work/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
