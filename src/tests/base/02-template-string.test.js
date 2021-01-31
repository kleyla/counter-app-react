import { getSaludo } from "../../base/02-template-string";

describe("pruebas en 02-template-string", () => {
  test("getSaludo debe de retornar hola fernando ", () => {
    const nombre = "Fernando";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });
  //   getSaludo debe retornar Hola Carlos si no hay argumento nombre
  test("getSaludo debe retornar Hola Carlos si no hay argumento nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
