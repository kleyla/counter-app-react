import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "./../CounterApp";

describe("Prueba en CounterApp", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    // console.log("beforeEach se ejecuta antes de cada test");
    wrapper = shallow(<CounterApp />);
  });

  test("Debe mostrar CounterApp correctamente , match con un snapshot y sus valores por defecto", () => {
    // const value = 10;
    // const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100, usar el wrapper.find tomando el elemento donde se muestra el valor del contador", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const texto = wrapper.find("h2").text();
    // console.log(typeof texto);
    expect(parseInt(texto)).toBe(value);
  });

  test("Debe de incrementar con el boton de +1", () => {
    wrapper.find("button").at(0).simulate("click");

    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("Debe de incrementar con el boton de -1 ", () => {
    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("Debe de colocar el valor por defecto con el btn reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);

    wrapper.find("button").at(0).simulate("click");

    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("105");
  });
});
