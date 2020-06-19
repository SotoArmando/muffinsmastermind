
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
    CodebreakerHist: [["blue", "blue", "blue", "blue"]],
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    isOneplayer: true,
    Turn: 3,
    Codebreakerchecked: ["blue", "blue", "blue", "blue"],
    Codemakerchecked: ["red", "red", "", ""],
    Secret: ["blue", "blue", "green", "green"],
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

test('Tap color red: player 2 is able to tap color white', () => {
    const { container } = createContainer({ ...defaultstate });
    operator("TOGGLE_CASE_FORMCODEMAKERINPUT", container);
    container.querySelector(".Askform.active .ball.red").click();
    expect(container.querySelector(".Askform.active")).not.toBeInTheDocument();
});

test('Tap color white: player 2 is able to tap color red', () => {
    const { container } = createContainer({ ...defaultstate });
    operator("TOGGLE_CASE_FORMCODEMAKERINPUT", container);
    container.querySelector(".Askform.active .ball.red").click();
    expect(container.querySelector(".Askform.active")).not.toBeInTheDocument();
});


