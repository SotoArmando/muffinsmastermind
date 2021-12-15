import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer);
const root = document.getElementById('root');
function renderToDOM() {
  if (root !== null) {
    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>, root
    );
  }
}

renderToDOM();
export {renderToDOM};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
