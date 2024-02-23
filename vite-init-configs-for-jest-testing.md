# Configuraciones iniciales para realizar testing con JEST en un proyecto de Vite

## Instalando JEST

`yarn add -D jest`

## Instalar el intelisense de JEST

`yarn add -D @types/jest`

## Para que funcione con Babel

### instalar las siguientes dependencias

`yarn add -D babel-jest @babel/core @babel/preset-env`

### agregar el archivo `babel.config.js` en con este contenido:

```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## Instalar los types cuando se trabaje con JavaScript

`yarn add -D prop-types`

## Añadir el script 'test' en el package.json

```json
"script":{
  "test": "jest --watchAll"
}
```

para usar esta linea se utilizaría `yarn test` o `npm run test`

## Crear la carpeta de 'tests'

Esta carpeta seria un reflejo de nuestro 'src' con la misma estructura y nombre de archivos, pero con .test antes de la extensión final.

`demo.test.js`

## Escribir nuestros test

```js
describe('Tests of <Component-name />', ()=>{
  test('<nombre de la prueba>', ()=>{
    //Arrange

    //Act

    //Assert
    //? more info in: https://jestjs.io/docs/expect
    expect( <variable-a-probar> ).toBe( <resultado-esperado> );
  })
})
```

## En caso de que hayan errores al hacer pruebas con fetch (hay que hacer la configuración si estamos en una version de node por debajo de 18)

### Instalar la dependencia 'whatwg-fetch'

`yarn add -D whatwg-fetch`

### Crear el archivo 'jest.setup.js' en el root

**Este archivo contiene codigo de javascript el cual se ejecuta justo cuando inician las pruebas.**

Agregar este polyfill (Un polyfill es un fragmento de código, normalmente JavaScript en la Web, que se utiliza para proporcionar funcionalidades modernas en navegadores antiguos que no las soportan de forma nativa.)

``` js
import 'whatwg-fetch';
```

### Crear archivo 'jest.config.cjs' en el root

**Este archivo lo busca JEST en el momento en el que lanzamos la test suit**, Para más información ver la documentación: https://jestjs.io/docs/configuration

Agregar esto en el archivo

``` cjs
module.exports = {
  setupFiles: ['./jest.setup.js']
}
```
