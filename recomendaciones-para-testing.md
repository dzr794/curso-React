# Recomendaciones al hacer testing

## 1. Trazar la ruta critica

Se recomeinda trazar la ruta critica de todo el procedimiento que hay que probar, asumiendo que no hay tiempo.

La ruta critica es lo que necesitamos probar para que la aplicación salga a producción con la funcionalidad que necesitamos probada.

## Empezar el testing por los componentes que MENOS DEPENDECIAS TIENEN

esto nos permite que cuando lleguemos a las pruebas de los componentes con mas dependias ya hayamos realizado las pruebas de cada una de sus partes permitiendo así que las pruebas sean mas cortas.