
/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import rootReducer from '../../reducers/index';
import App from '../../App';
import operator from '../../logic/operator';
import configureMockStore from 'redux-mock-store';
import {  mount } from 'enzyme';
import "../test-config";
const mockStore = configureMockStore();

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
    isThereWinner: true
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


describe('Codemakerinput', () => {
    let wrapper, store;

    beforeEach(() => {
        store = mockStore({ mastermind: defaultstate, mastermindhistory: [] });
        // Shallow render the container passing in the mock store
        wrapper = mount(
            <Provider store={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider> 
        );
    });

    test('Should close Ansform', () => {
        // console.log(wrapper.getDOMNode());
        // console.log(document.body);
        
        wrapper.findWhere(e => e.hasClass('Askform')).findWhere(e => e.hasClass("Close")).simulate("click", { container: wrapper.getDOMNode() })
        expect(wrapper.getDOMNode().querySelector(".Askform.active")).not.toBeInTheDocument();
    });

    test('Tap color red: player 2 is able to tap color white', () => {
        wrapper.findWhere(e => e.hasClass('Askform')).findWhere(e => e.hasClass("option")).first().simulate("click", { container: wrapper.getDOMNode() })
        expect(wrapper.getDOMNode().querySelector(".Askform.active")).not.toBeInTheDocument();
    });

    test('Tap color white: player 2 is able to tap color red', () => {
        wrapper.findWhere(e => e.hasClass('Askform')).findWhere(e => e.hasClass("option")).last().simulate("click", { container: wrapper.getDOMNode() })
        expect(wrapper.getDOMNode().querySelector(".Askform.active")).not.toBeInTheDocument();
    });
});

