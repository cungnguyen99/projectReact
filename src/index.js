import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

import {RoomProvider} from './context/Context'
ReactDOM.render(
  <React.StrictMode>
    {/* có thể wrapp Roomprovider cũng như Router ở bên file App.js giống bên coder làm nhưng 
        cũng có thể wrapp ở đây do bên này gọi hẳn component App ra rổi */}
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
