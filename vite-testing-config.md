# Instalación y configuracion de Jest + React Testing Library

## En proyectos de React + Vite

1. Instalaciones:

    ``` cmd
    yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 
    yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
    ```

2. Opcional: Si usamos Fetch API en el proyecto:

    ``` cmd
    yarn add --dev whatwg-fetch
    ```

3. Agregar la dependia de la PropTypes

    ``` cmd
    yarn add -D prop-types
    ```

4. Actualizar los scripts del __package.json__

    ``` json
    "scripts: {
    ...
    "test": "jest --watchAll"
    ```

5. Crear la configuración de babel __babel.config.js__

    ``` js
    module.exports = {
        presets: [
            [ '@babel/preset-env', { targets: { esmodules: true } } ],
            [ '@babel/preset-react', { runtime: 'automatic' } ],
        ],
    };
    ```

6. Opcional, pero eventualmente necesario, crear Jest config y setup:

    __jest.config.js__

    ``` js
    module.exports = {
        testEnvironment: 'jest-environment-jsdom',
        setupFiles: ['./jest.setup.js']
    }
    ```

    __jest.setup.js__

    ``` js
    // En caso de necesitar la implementación del FetchAPI
    import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
    ```
