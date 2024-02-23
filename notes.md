# Notas

## ¿Cómo crear un proyecto de react?

### con 'vite'

`yarn create vite` o `npm create vite`

### con 'create-react-app'

``` cmd
npx create-react-app <project-title>
```


## Notas de React

### Fragmento

React no permite mas de un nodo padre en la exportación de sus elementos, por lo que para hacer esto en el DOM es necesario usar un 'Fragment'
Esto es posible hacerlo de 2 formas:

forma 1: importando el 'Fragment' de React y usando ese modulo como padre.
con este modulo no habria problema en renderizar 2 o mas elementos padres en un solo modulo ya que <Fragment> no se renderiza.

``` React
import {Fragment} from 'React'

export const FirstApp = () => {
  return (
    <Fragment>
    <h1>FirstApp</h1>
    <div>holi</div>
    </Fragment>
  )
}

```

o la nueva forma simplificada, la cual no necesita de importaciones y consiste en simplemente usar

``` React
export const FirstApp = () => {
  return (
    <>
    <h1>FirstApp</h1>
    <div>holi</div>
    </>
  )
}
```

### Usando Props (properties)

podemos enviar propiedades como parametros a cada componente de este modo:

Al usar el componente le agregamos la propiedades del mismo modo que se agregan atributos en HTML
`<FirstApp stringProp="nombre" numberProp={123} booleanFalse={false} booleanTrue />`

### PropTypes

Las PropTypes son un modulo de React el cual sirve como el tipado de Typescript pero en JS, viene instalado por defecto en CRA pero debe de instalarse al usar vite (`yarn add -D prop-types`)

¿Cómo se usan?
1. Se deben importar al inicio del componente `import PropTypes from 'prop-types'`
2. Debajo del componente se declaran las propTypes así:
   ``` jsx
   <nombreComponente>.propTypes = {
    <nombrePropiedad>: PropTypes.<tipoPropiedad>,
  }
   ```

   por ejemplo:

   ```jsx
   FirstApp.propTypes = {
    title: PropTypes.string,

  }
   ```

En caso de que queramos que una propiedad sea requerida solo debemos agregar el `.isRequired` al final, así:

```jsx
   FirstApp.propTypes = {
    title: PropTypes.string.isRequired,

  }
   ```


debajo del componente se de

## RECOMENDACIONES

  1. Se recomienda que las variables o funciones que se usen dentro de un componente de React esten por fuera del componente para evitar que cuando el componente tenga que redibujarse va a volver a especificar en memoria el espacio que ocupa cada una de las funciones y variables creadas dentro del componente.

  Ejemplo con variable:

```React
const myVar = "Hello World";

export const FirstApp = () => {
  return (
    <h1>{ myVar }</h1>
  )
}
```

  
  Ejemplo con funcion:

```React
const myFunction = (a,b) => a+b;

export const HelloWorldApp = () => {
  return (
    <h1>{myFunction(1,2)}</h1>
  )
}
```
