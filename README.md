# COUNTER APP

Usar Proptyles para validar los datos que le llegan del padre.

```
import PropTypes from "prop-types";
```

## Tarea

1. Crear un nuevo componente dentro de la carpeta SRC llamado
   `CounterApp`

2. El CounterApp debe de ser un **Functional Component**

3. El contenido del **CounterApp** debe de ser:

   ```
       <h1>CounterApp</h1>
       <h2> { value } </h2>
   ```

4. Donde `"value"` es una propiedad enviada desde el padre hacia
   el componente **CounterApp** (Debe ser númerica validada con PropTypes)

5. Reemplazar en el index.js el componente de <PrimeraApp />
   por el componente <CounterApp />
   (no se olviden del value que debe de ser un número)

6. Asegúrense de no tener errores ni warnings
   (Cualquier warning no usado, comentar el código)

## TEST

### Introduccion a las pruebas unitarias y de integracion

Caracteristicas:

- Faciles de escribir
- Faciles de leer
- Confiables
- Rapidas
- Principalmente unitarias

#### Arrange (Arreglar)

Preparamos el estado inicial, es el sujeto a probar

- Inicializamos varibles
- Importaciones necesarias

#### Act (Actuar)

Aplicamos acciones y estimulos al sujeto de prueba

- Llamamos metodos
- Simulamos clikcs
- Realizar las acciones sobre el paso anterior

#### Assert (Afirmar)

Obserbar el comportamiento resultante

- Son los resultados esperados
- Ej. Que algo cambie, algo incremente o bien que nada suceda

### Mitos

- Hacen que la aplicacion no tenga errores
- Las pruebas no puedan fallar
- Hacen mas lenta mi aplicacion
- Es una perdida de tiempo
- Hay que probar todo

Correr test:

```
npm run test
```

_Enzyme_

https://enzymejs.github.io/enzyme/

https://github.com/wojtekmaj/enzyme-adapter-react-17

https://www.npmjs.com/package/enzyme-to-json
