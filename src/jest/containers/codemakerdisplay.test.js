/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render, fireEvent } from '@testing-library/react';
import rootReducer from '../../reducers/index';
import App from '../../App';

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

const createContainer = (initialstate) => {
    const store = createStore(rootReducer, { mastermind: initialstate });
    return render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);
}

test('codebreakerdisplay: Player 1 has select bluelblueblue', () => {
    const { container } = createContainer({ ...defaultstate, Turn: 0, Codebreakerchecked: ["blue", "blue", "blue", "blue"], isActiveGame: true });
    expect(container.querySelectorAll(".Socket.blue").length === 4).toBeTruthy();
});


test('codebreakerdisplay: The game is at Turn 3 Player 2 must play', () => {
    const { container } = createContainer({ ...defaultstate, Turn: 3, isActiveGame: true });
    expect(container.querySelector("div.Askstatus .Ask.active ")).toBeInTheDocument();
});

test('codebreakerdisplay: The game is at Turn 3 Player 2 table is able to Click', () => {
    const { container } = createContainer({ ...defaultstate, Turn: 1, isActiveGame: true });
    container.querySelector("div.Askstatus .Ask.active .Socket").click();
    expect(container.querySelector("div.Askform.active")).toBeInTheDocument();
});


