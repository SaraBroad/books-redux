// import React from "react";
// import { render } from 'react-dom'
// import { Router } from 'react-router-dom'
// import App from "./App";
// // import configureStore
// // import ReduxProvider

// // ReactDOM.render( <App/>, document.getElementById('root') );

// render(
//     // <ReduxProvider store={store}>
//       <Router>
//         <App />
//       </Router>,
//     // </ReduxProvider>,
//     document.getElementById("root")
//   );

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';

ReactDOM.render((
     <BrowserRouter>
          <Route path="/" component={App}/>
     </BrowserRouter>
     ),
     document.getElementById('root')
);