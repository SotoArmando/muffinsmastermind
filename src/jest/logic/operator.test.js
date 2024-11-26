/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import App from '../../App';
import operator from '../../logic/operator.js'
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

const TOGGLE_CASE_GAMEWIN = "div.Winner.active"
const TOGGLE_CASE_GAMEHIST = "div.Tablehistory"
const TOGGLE_CASE_GAMESETUPQUESTIONS = "div.Playerssecondquestion.active"
const TOGGLE_CASE_GAMESETUP = "div.Setupform.active"
const TOGGLE_CASE_FORMSETUPSECRET = "div.Secretcodesetup"
const TOGGLE_CASE_FORMCODEBREAKERINPUT = "div.Ansform"
const TOGGLE_CASE_FORMCODEMAKERINPUT = "div.Askform"

const createContainer = () => render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>);

test('TOGGLE_CASE_GAMEWIN', () => {
    const { container } = createContainer()

    operator("TOGGLE_CASE_GAMEWIN", container);
    expect(container.querySelector(TOGGLE_CASE_GAMEWIN)).toBeInTheDocument();
});

test('TOGGLE_CASE_GAMEHIST', () => {
    const { container } = createContainer()

    operator("TOGGLE_CASE_GAMEHIST", container);
    expect(container.querySelector(TOGGLE_CASE_GAMEHIST)).toBeInTheDocument();
});

test('TOGGLE_CASE_GAMESETUPQUESTIONS', () => {
    const { container } = createContainer()

    operator("TOGGLE_CASE_GAMESETUPQUESTIONS", container);
    expect(container.querySelector(TOGGLE_CASE_GAMESETUPQUESTIONS)).toBeInTheDocument();
});


test('TOGGLE_CASE_GAMESETUP', () => {
    const { container } = createContainer()

    operator("TOGGLE_CASE_GAMESETUP", container);
    expect(container.querySelector(TOGGLE_CASE_GAMESETUP)).toBeInTheDocument();
});

test('TOGGLE_CASE_FORMSETUPSECRET', () => {
    const { container } = createContainer()

    operator("TOGGLE_CASE_FORMSETUPSECRET", container);
    expect(container.querySelector(TOGGLE_CASE_FORMSETUPSECRET)).toBeInTheDocument();
});

test('TOGGLE_CASE_FORMCODEBREAKERINPUT', () => {
    const { container } = createContainer()

    operator("TOGGLE_CASE_FORMCODEBREAKERINPUT", container);
    expect(container.querySelector(TOGGLE_CASE_FORMCODEBREAKERINPUT)).toBeInTheDocument();
});

test('TOGGLE_CASE_FORMCODEMAKERINPUT', () => {
    const { container } = createContainer()

    operator("TOGGLE_CASE_FORMCODEMAKERINPUT", container);
    expect(container.querySelector(TOGGLE_CASE_FORMCODEMAKERINPUT)).toBeInTheDocument();
});

