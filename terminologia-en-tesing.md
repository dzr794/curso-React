# Terminologia en testing

Al desarrollar pruebas unitarias o de integración se emplean varios términos que no son imprescindibles conocer para hacer una prueba pero si es recomendable conocerlos para saber que diferencias hay entre ellos y saber que posibilidades tenemos para construir la prueba. Los términos básicos son sujeto bajo prueba o subject under test o SUT, fake, mock, stub y spy.

## SUT o Subject Under Test (Sujeto bajo pruebas)

En una prueba el objeto bajo prueba es el elemento del que se quiere probar su comportamiento y que las pruebas verificarán que para los casos de prueba funciona según lo esperado.

## Colaboradores, impostores o fakes

Dado que raramente el sujeto bajo prueba funciona de forma aislada sino que que se comunica con otros elementos estos colaboradores han de reemplazarse pre programando su comportamiento, a los colaboradores se les denomina impostores o fakes ya que no son los objetos reales que se usan en el programa en ejecución pero simulan su comportamiento.

**Según el tipo de doble o fake que sea un objeto están los siguientes tipos:**

### Stub

**Es un *fake* al que se le reprograman sus valores de retorno** y se proporciona al objeto bajo prueba teniendo control sobre cuales son los valores que usa el sujeto bajo control.

### Mock

**Es un *fake* que después de terminada la prueba puede ser examinado para comprobar si las interacciones con el sujeto bajo prueba han sido las correctas**, se puede probar si un método ha sido llamado o cuántas veces ha sido llamado junto con sus parámetros. Adicionalmente al igual que los stub puede preprogramarse su comportamiento. **Si solo se necesita preprogramar los resultados se suele utilizar un *stub* y solo cuando además se necesitan verificar las interacciones se usa un *mock*.**

### Spy

**Es un *fake* en el que solo un subconjunto de métodos son fake** y a menos que explícitamente sean mockeados el resto de métodos son los reales.

## Beneficios de los fakes

**Los colaboradores permiten hacer los casos de prueba deterministas haciendo que siempre produzcan el mismo resultado y las pruebas no se vean afectados por condiciones externas**, los colaboradores evitan efectos colaterales, evitan depender del entorno de computación, hacen que las pruebas sean rápidas por no necesitar de sistemas externos como una base de datos o servicio de red y **permiten probar comportamientos inusuales en un entorno real**.