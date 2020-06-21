
/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import '../test-config';
import React from 'react';
import rootReducer from '../../reducers/index';
import App from '../../App';
import operator from '../../logic/operator';
import { Provider } from 'react-redux';
import { fireEvent } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Gameover from '../../containers/gameover';

const defaultstate = {
    CodemakerHist: [],
    CodebreakerHist: [["red", "red", "red", "red"]],
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    isOneplayer: true,
    Turn: 0,
    Codebreakerchecked: ["red", "red", "red", "red"],
    Codemakerchecked: ["red", "red", "red", "red"],
    Secret: ["red", "red", "red", "red"],
    isActiveGame: true,
    isThereWinner: true
}

const mockStore = configureMockStore();
const rollturn = "div.Gameover div.isPlayerready"
const TOGGLE_CASE_GAMEWIN = "div.Gameover .span0.border0.useraction.margin1"



describe('Gameover', () => {
    let wrapper, store, props;

    beforeEach(() => {
        store = mockStore({ mastermind: defaultstate, mastermindhistory: [] });
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <Gameover store={store} handleClick={operator} isThereWinner={false} />
        );
        props = wrapper.props().children.props;
    });

    it('should push the actual state to history', () => {
        console.log(props);
        expect(JSON.stringify(props.state)).toBe(JSON.stringify(defaultstate));
    });

    it('should push the actual state to history', () => {
        store = mockStore({ mastermind: { ...defaultstate, isThereWinner: false } });
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <Gameover store={store} handleClick={operator} isThereWinner={true} />
        );
        props = wrapper.props().children.props;
        expect(props.isThereWinner).toBe(true);
    });
    it('should push the actual state to history', () => {
        store = mockStore({ mastermind: { ...defaultstate, isThereWinner: false } });
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <Gameover store={store} handleClick={operator} isThereWinner={false} />
        );
        props = wrapper.props().children.props;
        expect(props.isThereWinner).toBe(false);
    });

    it('should show previously rolled value', () => {
        props.rollTurns(1);
        const actions = store.getActions();
        expect(actions).toEqual([{ type: "endCodebreakerTurn", actionstate: { Turn: 1 } }]);
    });

    it('should show previously rolled value', () => {
        props.rollTurns(2);
        const actions = store.getActions();
        expect(actions).toEqual([{ type: "endCodemakerTurn", actionstate: { Turn: 2 } }]);
    });

    it('should show previously rolled value', () => {
        props.rollTurns(1, true);
        const actions = store.getActions();
        expect(actions).toEqual([{ type: "endCodebreakerTurn", actionstate: { Turn: 1 } }, { type: "endCodemakerTurn", actionstate: { Turn: 2 } }]);
    });

    it('should show previously rolled value', () => {
        props.resetGame();

        const actions = store.getActions();
        expect(actions).toEqual([{
            type: 'UPDATE',
            actionstate: {
                CodemakerHist: [],
                CodebreakerHist: [],
                CodemakerTarget: 0,
                CodebreakerTarget: 0,
                isPlayer1turn: true,
                isOneplayer: false,
                Turn: -1,
                Codebreakerchecked: ["", "", "", ""],
                Codemakerchecked: ["", "", "", ""],
                Secret: [],
            }
        }]);
    });

    it('should show previously rolled value', () => {
        props.pushTable(defaultstate);
        const actions = store.getActions();
        expect(actions).toEqual([{ type: 'PUSH_TABLE', table: defaultstate }]);
    });

    test('Functions are called properly', () => {
        wrapper = mount(
            <Provider store={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider> 
        )

        wrapper.find(".Gameover span.useraction").simulate("click", { container: wrapper.getDOMNode() });
        wrapper.find(".Gameover span.Close").simulate("click", { container: wrapper.getDOMNode() });
        wrapper.find(".Gameover div.isPlayerready").simulate("click");
    })

});