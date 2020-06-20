
/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent } from '@testing-library/react';
import rootReducer from '../../reducers/index';
import App from '../../App';
import operator from '../../logic/operator';


const defaultstate = {
    CodemakerHist: [["red", "red", "red", "red"]],
    CodebreakerHist: [["red", "red", "red", "red"]],
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    isOneplayer: true,
    Turn: 2,
    Codebreakerchecked: ["red", "red", "red", "red"],
    Codemakerchecked: ["", "", "", ""],
    Secret: [],
    isActiveGame: true,
    isThereWinner: true
}


const createContainer = (initialstate) => {
    const store = createStore(rootReducer, { mastermind: initialstate });
    return {
        render: {
            ...render(
                <Provider store={store}>
                    <React.StrictMode>
                        <App />
                    </React.StrictMode>
                </Provider>)
        }, store
    };
}

test('Click close should close the Setup form', () => {
    const { render, store } = createContainer({ ...defaultstate });
    const { container } = render;
    container.querySelector("div.Statustable span.status0").click();
    expect(container.querySelector("div.Tablehistory.active")).toBeInTheDocument;
});

