import React from "react";
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe("Prueba en PrimeaApp", () => {
  //   test("Debe de mostrar el mensaje Hola, soy Karen", () => {
  //     const saludo = "Hola, soy Karen";
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe de mostrar PrimeraApp correctamente", () => {
    const saludo = "Hola, soy Karen";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });
});
