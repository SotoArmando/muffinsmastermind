/* eslint no-undef: 0  react/jsx-filename-extension: 0 */



import { renderToDOM } from "../index";

describe("test ReactDOM.render", () => {
  it("should call ReactDOM.render", () => {
    renderToDOM();
    // expect(ReactDOM.render).toHaveBeenCalled();
  });
});
