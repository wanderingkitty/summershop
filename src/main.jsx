import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot
import Root from './routes/Root';
import firebase from './data/firebase';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
