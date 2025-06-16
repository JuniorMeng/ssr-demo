import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from '../shared/App'
import createStore from '../shared/store';

const store = createStore();

// export const App = () => {
//   return (
//     <BrowserRouter>
//       <App store={store} />
//     </BrowserRouter>
//   )
// }

hydrateRoot(document.getElementById('root')!, <BrowserRouter>
    <App store={store} />
  </BrowserRouter>)