import { retornaArreglo } from "./../../base/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("debe de retornar un string y un numero", () => {
    const arr = ["ABC", 123];
    expect(arr).toEqual(["ABC", 123]);
  });
});
