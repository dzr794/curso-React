# Notas

## ¿Cómo crear un proyecto de react?

### con 'vite'

`yarn create vite` o `npm create vite`

### con 'create-react-app'

```cmd
npx create-react-app <project-title>
```

## ¿Cómo usar less para los estilos?

simplemente instalalo

`yarn add -D less`

## Notas de React

### Fragmento

React no permite mas de un nodo padre en la exportación de sus elementos, por lo que para hacer esto en el DOM es necesario usar un 'Fragment'
Esto es posible hacerlo de 2 formas:

forma 1: importando el 'Fragment' de React y usando ese modulo como padre.
con este modulo no habria problema en renderizar 2 o mas elementos padres en un solo modulo ya que `<Fragment>` no se renderiza.

```React
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

```React
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
   ```jsx
   <nombreComponente>.propTypes = {
    <nombrePropiedad>: PropTypes.<tipoPropiedad>,
   ```

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

### defaultProps

Se pueden declarar de 2 formas, la mas común es ponerla después de los propTypes.
por ejemplo:

```jsx
FirstApp.propTypes = {
  name: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: "David",
  subtitle: "No hay subtitulo",
  title: "No hay título",
}
```

pero también se pueden asignar al hacer la segregación delas props del componente

```jsx
export const FirstApp = ( { title = 'abc', subtitle = 'xyz', name='asd' } ) => {
  export ...
}
```

### useState

el useState hace parte de los Hooks de React, cada hook comienza con la palabra clave ***use*** y se usan de la siguiente manera:

se utiliza como una desestructuracion de un arreglo que retorna la función useState, la cual puede recibir parametros.
en este caso: `const [ counter, setCounter ] = useState( value );` se recibe el parametro *value* que viene desde los props del componente.

- la primera parte de la desestructuración es la variable **CONSTANTE** que controlará el hook useState.
- la segunda parte de la desedtructuración es una función la cual se usa para cambiar el valor de nuestra variable.

acontinuación un ejemplo de uso de este useState en una app que cuenta números.

en esta hay 3 botones, cada uno con un handler que llama al useState para modificar el valor de **counter**.

Si no se usara el use state, React NO RENDERIZARIA EL NUEVO VALOR de *value*.

```jsx
import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ( {value} ) => {

  const [ counter, setCounter ] = useState( value );

  const handleSubtract = () => {
    setCounter( counter - 1 );
  }

  const handleAdd = () => {
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1 );
  }

  const handleReset = () => {
    setCounter( value );
  }

  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
    <button onClick={handleSubtract}>-1</button>
    <button onClick={handleAdd}>+1</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
  value: 0,
}
```

## RECOMENDACIONES

1. Se recomienda que las variables o funciones que se usen dentro de un componente de React esten por fuera del componente para evitar que cuando el componente tenga que re dibujarse va a volver a especificar en memoria el espacio que ocupa cada una de las funciones y variables creadas dentro del componente.

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
