# Notas sobre testing

## Características de las pruebas

1. Fáciles de escribir
2. Fáciles de leer
3. Confiables
4. Rápidas
5. Principalmente unitarias:
   Las pruebas unitarias son extremadamente importantes, ya que son las bases de nuestra App.
   Al confirmar el funcionamiento de cada uno de los miembros que componen la App, se pueden realizar pruebas integrales probando unicamente la interacción entre sus partes, enfocandose unicamente en que trabajen bien entre si.

## AAA

* Arrange 	(Arreglar)
* Act 		(Actuar)
* Assert 	(Afirmar)

### Arrange (Arreglar)

Es el paso en el cual preparamos el estado inicial, usualmente se conoce como "el sujeto a probar"

* Inicializamos variables
* Importaciones necesarias
* En general se prepara el ambiente a probar.

### Act (Actuar)

Es donde aplicamos acciones o estimulos al sujeto de pruebas

* Llamar metodos
* Simular clicks
* Realizar acciones sobre el paso anterior (Arrange)

La idea es aplicar estimulos sobre el sujeto de pruebas para preoparar el siguiente paso (Assert)

### Assert (Afirmar)

Se resume en observar el comportamiento resultante

* ¿Son los resultados esperados?
* Ej: que algo cambie, algo incremente o bien que nada suceda.

## Mitos

1. **Hacen que la App no tenga errores**
   Tanto las pruebas como el programa son escritas por humanos y los humanos tienden a equivocarse.
2. **Las pruebas no pueden fallar**
   Existen tanto falsos positivos como falsos negativos
   Puede que el programa funcione pero la prueba no funcione o puede que la prueba funcione pero el programa no funcione.
3. **Hace más lenta la App**
   Esto no es cierto porque las pruebas corren unicamente en el entorno de desarrollo, las pruebas no llegan al entorno de producción, no es parte del bundle que se genera para desplegar en un servidor.
4. **"Es una perdida de tiempo"**
   No hay que perder tiempo probando cosas que no nos conciernen.
   Por ejemplo, si usamos una libreria, no debemos probar que funcione la libreria, porque eso ya lo debio realizar la persona que creo la libreria. Nosotros debemos probar las interacciones entre la libreria y nuestra App.
5. **"Hay que probar todo"**
   Probar principalmente la ruta critica en casos de que no haya mucho tiempo.

## Priorizar la ruta critica!

Si hay poco tiempo y necesitamos hacer pruebas (siempre se necesitan pruebas), lo que se debe probar primero es la ruta critica de la App.

Ejemplo de una App eCommerce:

Login -> selección de producto -> proceso de compra -> confirmación de compra -> notificaciones -> proceso porst venta

## RECORDAR

* NO SE PUEDEN HACER PRUEBAS DE ALGO QUE NO ESTA SIENDO EXPORTADO
