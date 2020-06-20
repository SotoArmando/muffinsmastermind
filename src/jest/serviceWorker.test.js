/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import * as serviceWorker from '../serviceWorker';
import operator  from '../logic/operator.js'
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

const TOGGLE_CASE_GAMEWIN = "div.Winner.active"
const TOGGLE_CASE_GAMEHIST = "div.Tablehistory"
const TOGGLE_CASE_GAMESETUPQUESTIONS = "div.Playerssecondquestion.displayed, div.Playerssecondquestion.active"
const TOGGLE_CASE_GAMESETUP = "div.Setupform.active"
const TOGGLE_CASE_FORMSETUPSECRET = "div.Secretcodesetup"
const TOGGLE_CASE_FORMCODEBREAKERINPUT = "div.Ansform"
const TOGGLE_CASE_FORMCODEMAKERINPUT = "div.Askform"

test('Should NOT Open: Case user trigges Codemaker forms before fist-time Setup', () => {
    serviceWorker.register()
});

