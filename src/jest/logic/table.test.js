/* eslint no-undef: 0  react/jsx-filename-extension: 0 */
import Table from '../../logic/table.js'

const table = Table();

test('randomSecret: Generates random secrets', () => {
    const a = table.randomSecret(),
        b = table.randomSecret();

    expect(a != b).toBeTruthy();
});

test('getCodemakerplay: Generates codemaker plays => redredredred', () => {
    expect(table.getCodemakerplay(["green", "green", "green", "green"], ["green", "green", "green", "green"]).join("") === "redredredred").toBeTruthy();
});

test('getCodemakerplay: Generates codemaker plays => redwhitewhite', () => {
    expect(table.getCodemakerplay(["green", "yellow", "blue", "black"], ["green", "blue", "yellow", "yellow"]).join("") === "redwhitewhite").toBeTruthy();
});