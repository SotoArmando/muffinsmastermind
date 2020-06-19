/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import App from '../../App';
import Table from '../../logic/table.js'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers/index';

const defaultstate = {
    CodemakerHist: [],
    CodebreakerHist: [],
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    isOneplayer: true,
    Turn: -1,
    Codebreakerchecked: ["", "", "", ""],
    Codemakerchecked: ["", "", "", ""],
    Secret: ["green", "green", "green", "green"],
    isActiveGame: false,
    isThereWinner: false
}

const store = createStore(rootReducer, { mastermind: defaultstate });
const table = Table();

const createContainer = () => render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>);

test('randomSecret: Generates random secrets', () => {
    const { container } = createContainer()
    const a = table.randomSecret(),
        b = table.randomSecret();

    expect(a != b).toBeTruthy();
});

test('getCodemakerplay: Generates codemaker plays => redredredred', () => {
    expect(table.getCodemakerplay(["green", "green", "green", "green"], ["green", "green", "green", "green"]).join("") === "redredredred").toBeTruthy();
});

test('getCodemakerplay: Generates codemaker plays => redwhitewhite', () => {
    expect(table.getCodemakerplay(["green", "yellow", "blue", "black"], ["green", "blue", "yellow", "yellow"]).join("") === "redwhitewhite").toBeTruthy();
});