
/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
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

const Close = ".Secretcodesetup .Close"
const cellred = "div.Secretcodesetup div:not(.display) .Secretcode .ball.red"
const cellblue = "div.Secretcodesetup div:not(.display) .Secretcode .ball.blue "
const cellgreen = "div.Secretcodesetup div:not(.display) .Secretcode .ball.green "
const cellyellow = "div.Secretcodesetup div:not(.display) .Secretcode .ball.yellow "
const cellwhite = "div.Secretcodesetup div:not(.display) .Secretcode .ball.white "
const cellblack = "div.Secretcodesetup div:not(.display) .Secretcode .ball.black "

const createContainer = (initialstate) => {
    const store = createStore(rootReducer, { mastermind: initialstate, mastermindhistory: [{ ...defaultstate }] });
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

test('Secret Should display 4 red colors ', () => {
    const { render } = createContainer({ ...defaultstate, Secret: ["red", "red", "red", "red"], isOneplayer: false });
    const { container } = render;

    operator("TOGGLE_CASE_FORMSETUPSECRET", container);
    expect(container.querySelectorAll("div.Secretcodesetup > .display > .Secretcode .red").length === 4).toBeTruthy();
});

test('Secret Should be hidden while playing Solo ', () => {
    const { render } = createContainer({ ...defaultstate, Secret: ["red", "red", "red", "red"] });
    const { container } = render;

    operator("TOGGLE_CASE_FORMSETUPSECRET", container);
    expect(container.querySelectorAll("div.Secretcodesetup > .display > .Secretcode .white").length === 4).toBeTruthy();
});

test('Should add 4 red colors to Secret', () => {
    const { render, store } = createContainer({ ...defaultstate });
    const { container } = render;
    const { mastermind } = store.getState();

    operator("TOGGLE_CASE_FORMSETUPSECRET", container);
    container.querySelector(cellred).click();
    container.querySelector(cellred).click();
    container.querySelector(cellred).click();
    container.querySelector(cellred).click();

    const { Secret } = mastermind;

    expect(Secret.join("") === "redredredred").toBeTruthy();
});

test('Should close code secret input', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_FORMSETUPSECRET");
    container.querySelector(Close).click();
    expect(container.querySelector(".div.Secretcodesetup.active")).not.toBeInTheDocument();
});

test('Should add color Red to secrect', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_FORMSETUPSECRET");
    container.querySelector(cellred).click();
    expect(container.querySelector(".div.Secretcodesetup.active")).not.toBeInTheDocument();
});

test('Should add color Blue to secrect', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_FORMSETUPSECRET");
    container.querySelector(cellblue).click();
    expect(container.querySelector(".div.Secretcodesetup.active")).not.toBeInTheDocument();
});
test('Should add color Green to secrect', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_FORMSETUPSECRET");
    container.querySelector(cellgreen).click();
    expect(container.querySelector(".div.Secretcodesetup.active")).not.toBeInTheDocument();
});
test('Should add color Yellow to secrect', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_FORMSETUPSECRET");
    container.querySelector(cellwhite).click();
    expect(container.querySelector(".div.Secretcodesetup.active")).not.toBeInTheDocument();
});
test('Should add color White to secrect', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_FORMSETUPSECRET");
    container.querySelector(cellyellow).click();
    expect(container.querySelector(".div.Secretcodesetup.active")).not.toBeInTheDocument();
});
test('Should add color Black to secrect', () => {
    const { render } = createContainer({ ...defaultstate });
    const { container } = render;
    operator("TOGGLE_CASE_FORMSETUPSECRET");
    container.querySelector(cellblack).click();
    expect(container.querySelector(".div.Secretcodesetup.active")).not.toBeInTheDocument();
});





