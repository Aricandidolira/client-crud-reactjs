import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './assets/styles/global';
import Routes from './routes/routes';
import Root from './Root';

function App() {
  return (
    <Root>
      <Router>
        <GlobalStyles />
        <Routes />
       </Router>
    </Root>
  );
}

export default App;
