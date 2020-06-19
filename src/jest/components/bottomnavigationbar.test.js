
/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent } from '@testing-library/react';
import rootReducer from '../../reducers/index';
import App from '../../App';
import operator from '../../logic/operator';

const defaultstate = {
    CodemakerHist: [],
    CodebreakerHist: [["red", "red", "red", "red"]],
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    isOneplayer: true,
    Turn: 1,
    Codebreakerchecked: ["red", "red", "red", "red"],
    Codemakerchecked: ["", "", "", ""],
    Secret: [],
    isActiveGame: true,
    isThereWinner: true
}

const playerquestion1options = "div.Setupform div.Playersquestion .option"

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
    container.querySelector("div.Table span.status").click()
    container.querySelector(close).click();
    expect(container.querySelector(".Setupform.active")).not.toBeInTheDocument;
});

