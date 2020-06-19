
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
    isActiveGame: true,
    isThereWinner: true
}

const rollturn = "div.Gameover div.isPlayerready"
const TOGGLE_CASE_GAMEWIN = "div.Gameover .span0.border0.useraction.margin1"

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

test('The game is over', () => {
    const { render } = createContainer({ ...defaultstate, isThereWinner: true });
    const { container } = render;
    expect(container.querySelector("div.Winner.active")).toBeInTheDocument();
});

test('The player 1 is over. Player 1 should be able to keep playing.', () => {
    const { render, store } = createContainer({ ...defaultstate });
    const { container } = render;
    container.querySelector(rollturn).click();
    const { mastermind } = store.getState();
    const { Turn } = mastermind;
    console.log(Turn)
    expect(Turn === 5).toBeTruthy();
});


test('The game is over. Players should be able to dissmiss.', () => {
    const { render } = createContainer({ ...defaultstate, isThereWinner: true });
    const { container } = render;
    container.querySelector(TOGGLE_CASE_GAMEWIN).click();
    expect(container.querySelector("div.Winner.active")).not.toBeInTheDocument();
});


