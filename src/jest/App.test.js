/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import App from '../App';
import operator  from '../logic/operator.js'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

const TOGGLE_CASE_GAMEWIN = "div.Winner.active"

test('Should NOT Open: Case user trigges Codemaker forms before fist-time Setup', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);

    operator("TOGGLE_CASE_GAMEWIN", container);
    expect(container.querySelector(TOGGLE_CASE_GAMEWIN)).toBeInTheDocument();
});

