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

const store = createStore(rootReducer, { mastermind: defaultstate });
const Displaygamesetupbtn = "div.Table > div.row.centered span.status"
const TOGGLE_CASE_GAMESETUP = "div.Setupform.active";

const createContainer = () => render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>);

test('Display props.onClick is called when button is clicked', () => {
    const { container } = createContainer();

    container.querySelector(Displaygamesetupbtn).click();
    expect(container.querySelector(TOGGLE_CASE_GAMESETUP)).toBeInTheDocument();
});



