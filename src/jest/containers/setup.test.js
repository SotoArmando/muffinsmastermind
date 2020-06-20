
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
    CodebreakerHist: [],
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    isOneplayer: true,
    Turn: -1,
    Codebreakerchecked: ["", "", "", ""],
    Codemakerchecked: ["", "", "", ""],
    Secret: [],
    isActiveGame: false,
    isThereWinner: false
}

const playerquestion1options = "div.Setupform div.Playersquestion .option"
const playerquestion2options = "div.Setupform div.Playerssecondquestion .option"
const close = "div.Setupform > span.Close"

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
    operator("TOGGLE_CASE_GAMESETUP", container);
    container.querySelector(close).click();
    expect(container.querySelector(".Setupform.active")).not.toBeInTheDocument;
});

test('Should create the Secret', () => {
    const { render, store } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_GAMESETUP", container);
    container.querySelectorAll(playerquestion1options)[1].click();
    expect(container.querySelector("div.Playerssecondquestion.active")).toBeInTheDocument;
});

test('Should ask Player 2 to create a Secret', () => {
    const { render, store } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_GAMESETUP", container);
    container.querySelectorAll(playerquestion1options)[0].click();
    expect(container.querySelector("div.Playerssecondquestion.active")).toBeInTheDocument;
});

test('Should select role Codebreaker', () => {
    const { render, store } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_GAMESETUP", container);
    container.querySelectorAll(playerquestion2options)[1].click();
    expect(container.querySelector("div.Secretcodesetup.active")).toBeInTheDocument;
});

test('Should select role Codemaker', () => {
    const { render, store } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_GAMESETUP", container);
    container.querySelectorAll(playerquestion2options)[0].click();
    expect(container.querySelector("div.Secretcodesetup.active")).toBeInTheDocument;
});


