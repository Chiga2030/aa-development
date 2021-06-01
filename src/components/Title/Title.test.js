import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Title from './Title';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders with or without a value", () => {
  // act(() => {
  //   render(<Title />, container);
  // });
  // expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Title value="skills" />, container);
  });
  expect(container.textContent).toBe("skills");

  act(() => {
    render(<Title />, container);
  });
  expect(container.textContent).toBe("title");
});
