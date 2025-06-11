import React from 'react';
import ReactDom from 'react-dom';
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

ReactDom.hydrate(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById('root')
)