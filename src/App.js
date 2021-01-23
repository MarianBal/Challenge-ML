import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Mainapp from './Components/Mainapp';
import './app.scss';

const App = () => (
  <Router>
    <Mainapp />
  </Router>
);
export default App;
