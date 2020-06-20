/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import operator from '../logic/operator.js'
import ReactDOM from 'react-dom';
import App from '../App';
import * as serviceWorker from '../serviceWorker'
import { mock } from "jest";
import { renderToDOM } from "../index";

describe("test ReactDOM.render", () => {
  const originalRender = ReactDOM.render;
  const originalGetElement = global.document.getElementById;
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });
  afterAll(() => {
    global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
  });
  it("should call ReactDOM.render", () => {
    renderToDOM();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
