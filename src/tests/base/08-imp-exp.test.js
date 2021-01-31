import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "./../../base/08-imp-exp";

describe("Prueba de 08-imp-exp", () => {
  test("Debe de retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test("Debe de retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  //   Debe retornar un arreglo con los heroes de DC
  test("Debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroesData = heroes.filter((h) => h.owner === owner);
    const heroesDC = getHeroesByOwner(owner);

    expect(heroesDC).toEqual(heroesData);
  });

  //   Debe retornar un arreglo con los heroes de Marvel
  test("Debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroesData = heroes.filter((h) => h.owner === owner);
    const heroesMarvel = getHeroesByOwner(owner);

    expect(heroesMarvel.length).toBe(heroesData.length);
  });
});
