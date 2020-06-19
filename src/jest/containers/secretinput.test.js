
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
    Turn: 3,
    Codebreakerchecked: ["red", "red", "red", "red"],
    Codemakerchecked: ["red", "red", "red", "red"],
    Secret: ["red", "red", "red", "red"],
    isActiveGame: false,
    isThereWinner: false
}

const Close = ".Secretcodesetup .close"

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

test('Should be one history line registered', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    expect(container.querySelectorAll(".historyline").length === 1).toBeTruthy();
});


test('Should be opened Tablehistorydiv', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    container.querySelector(Tablehistorydiv).click();
    expect(container.querySelector("div.Tablehistory.active")).toBeInTheDocument();
});


