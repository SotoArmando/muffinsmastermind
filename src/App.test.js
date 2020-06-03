/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

const triggerSetupform = 'div.col.col0';
const triggerSetupCodemaker = 'div.Setupform span.option';
const triggerHistory = 'div.Statustable span.status0.border0';
const triggerFirstCodebreakerCell = 'div.Asktable .Socket';
const triggerFirstCodemakerCell = 'div.Askstatus .Socket';
const firsTimeSetupballred = 'div.Secretcodesetup .ball.red';
const firsTimeSetupballblue = 'div.Secretcodesetup .ball.blue'
const firsTimeSetupClose = 'div.Secretcodesetup span.Close'

function SetupCodeRedBlueRedBlue(container) {
    fireEvent.click(container.querySelector(triggerSetupform));
    fireEvent.click(container.querySelector(triggerSetupCodemaker));
    fireEvent.click(container.querySelector(firsTimeSetupballred));
    fireEvent.click(container.querySelector(firsTimeSetupballblue));
    fireEvent.click(container.querySelector(firsTimeSetupballred));
    fireEvent.click(container.querySelector(firsTimeSetupballblue));
    fireEvent.click(container.querySelector(firsTimeSetupClose));
}


test('Should NOT Open: Case user trigges Codemaker forms before fist-time Setup', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);

    fireEvent.click(container.querySelector(triggerFirstCodemakerCell))
    expect(container.querySelector("div.Ansform.active")).not.toBeInTheDocument();
});

test('Should NOT Open: Case user trigges Codebreaker forms before fist-time Setup', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);

    fireEvent.click(container.querySelector(triggerFirstCodebreakerCell))
    expect(container.querySelector("div.Askform.active")).not.toBeInTheDocument();
});

test('Should Open: case Codemaker form user-trigged', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);
    SetupCodeRedBlueRedBlue(container)
    fireEvent.click(container.querySelector(triggerFirstCodemakerCell))
    expect(container.querySelector("div.Ansform.active")).toBeInTheDocument();
});

test('Should Open: case Codebreaker form user-trigged', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);

    SetupCodeRedBlueRedBlue(container);

    fireEvent.click(container.querySelector(triggerFirstCodebreakerCell))
    expect(container.querySelector("div.Ansform.active")).toBeInTheDocument();
});

test('Should Open: case First-time Setup form user-trigged', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);

    fireEvent.click(container.querySelector(triggerSetupform))
    expect(container.querySelector("div.Setupform.active")).toBeInTheDocument();
});

test('Should Open: case Secret-code Setup user-trigged', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);

    fireEvent.click(container.querySelector(triggerSetupCodemaker))
    expect(container.querySelector("div.Secretcodesetup.active")).toBeInTheDocument();
});

test('Should Open: case Table history user-trigged', () => {
    const { container } = render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>);

    fireEvent.click(container.querySelector(triggerHistory))
    expect(container.querySelector("div.Tablehistory.active")).toBeInTheDocument();
});
