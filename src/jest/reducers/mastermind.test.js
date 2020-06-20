/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import App from '../../App';
import operator from '../../logic/operator.js'
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';

const createContainer = () => {
    const store = createStore(rootReducer);
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

test('Should dispatch Update', () => {
    const { container, store } = createContainer();
    const next = {
        CodemakerHist: [["red", "red", "red", "red"]],
        CodebreakerHist: [["red", "red", "red", "red"]],
        CodemakerTarget: 1,
        CodebreakerTarget: 1,
        isPlayer1turn: false,
        isOneplayer: false,
        Turn: 3,
        Codebreakerchecked: ["red", "red", "red", "red"],
        Codemakerchecked: ["red", "red", "red", "red"],
        Secret: ["red", "red", "red", "red"],
        isActiveGame: true,
        isThereWinner: true
    }

    store.dispatch({ type: 'UPDATE', actionstate: { ...next } })
    const { mastermind } = store.getState();
    expect(JSON.stringify(mastermind) === JSON.stringify(next)).toBeTruthy();
});


test('Should dispatch tap_codemakersecret', () => {
    const { container, store } = createContainer();

    store.dispatch({ type: 'tap_codemakersecret', color: "red" })
    const { mastermind: { Secret } } = store.getState();
    expect(Secret.join("") === "red").toBeTruthy();
});

test('Should dispatch tap_codebreakerchecked', () => {
    const { container, store } = createContainer();

    store.dispatch({ type: 'tap_codebreakerchecked', color: "red" })
    const { mastermind: { Codebreakerchecked } } = store.getState();
    expect(Codebreakerchecked.join("") === "red").toBeTruthy();
});

test('Should dispatch endCodebreakerTurn', () => {
    const { container, store } = createContainer();

    store.dispatch({ type: 'endCodebreakerTurn' })
    const { mastermind: { Codebreakerchecked } } = store.getState();
    expect(Codebreakerchecked.join("") === "").toBeTruthy();
});

test('Should dispatch endCodemakerTurn', () => {
    const { container, store } = createContainer();

    const next = {
        CodemakerHist: [["red", "red", "red", "red"]],
        CodebreakerHist: [["red", "red", "red", "red"]],
        CodemakerTarget: 1,
        CodebreakerTarget: 1,
        isPlayer1turn: false,
        isOneplayer: false,
        Turn: 3,
        Codebreakerchecked: ["red", "red", "red", "red"],
        Codemakerchecked: ["red", "red", "red", "red"],
        Secret: ["red", "red", "red", "red"],
        isActiveGame: true,
        isThereWinner: true
    }
    store.dispatch({ type: 'UPDATE', actionstate: { ...next } })
    store.dispatch({ type: 'endCodemakerTurn' })
    const { mastermind: { Codemakerchecked } } = store.getState();
    expect(Codemakerchecked.join("") === "").toBeTruthy();
});

