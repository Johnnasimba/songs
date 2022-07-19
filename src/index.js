import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
  <Provider store={createStore(reducers)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>  
)