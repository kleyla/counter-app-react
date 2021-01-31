import { getImagen } from "./../../base/11-async-await";

describe("Pruebas con 11-async-await.test", () => {
  test("Debe retornar el url de la imagen", async () => {
    const url = await getImagen();
    expect(url.includes("https://")).toBe(true);
  });
});
