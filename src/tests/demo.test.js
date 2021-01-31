// console.log("Test");
describe("Pruebas en el archivo demo.test.js", () => {
  test("deben de ser iguales los strings", () => {
    //   1 Inicializacion
    const mensaje = "Hola mundo";
    //   2 Estimolo
    const mensaje2 = `Hola mundo`;
    // 3 Observar el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
