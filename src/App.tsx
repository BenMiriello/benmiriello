import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './styles/tailwind.output.css';
import './styles/app.css';

import Homepage from './Homepage';
import GrabameetingPage from './GrabameetingPage';

const App = () => {
  return (
    <Router>
      <div className='w-full h-24'>
        <Link to='/' className='font-bold font-oswald text-4xl p-4 flex items-center h-full'>BEN MIRIELLO</Link>
      </div>

      <div className='w-screen h-screen'>
        <Switch>
          <Route path='/' exact>
            <Homepage />
          </Route>
          <Route path='/grabameeting'>
            <GrabameetingPage />
          </Route>
        </Switch>
        <div className='w-full h-12'></div>
      </div>
    </Router>
  )
}

export default App;
