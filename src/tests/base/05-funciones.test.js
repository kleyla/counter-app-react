import { getUser, getUsuarioActivo } from "./../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "Yop",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });
  //   getUsuarioActivo debe retornar un objeto
  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Karen";
    const userTest = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo("Karen");
    expect(user).toEqual(userTest);
  });
});
