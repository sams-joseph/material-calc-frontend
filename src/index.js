import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';


// import css
import './css/index.css';

// import components
import App from './components/App';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
