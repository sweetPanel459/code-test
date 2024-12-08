# Planificacion del algoritmo: Identificar tablas dentro de un xslx

## 1. Definición del Problema

**Definicion general**:

- Poder pasar un array bidemencional que representa un _xlsx_ e identificar las tablas
  que hay dentro.

**Definicion detallada**:

- Al ingresar un array **estrictamente bidimenciona** debe hacer lo siguiente:
  1. Pasar una array bidemencional a la funcion principal.
  2. Verficar si el array es dibimencional, si los seguir con la funcion.
  3. Instanciar 2 variables, _extraValues_ y _tableObtained_. La priemera guarda los
     valores sueltos y el segundo las tablas identificadas.
  4. 2 bucles para las filas y otra para las columnas. Que principalmente identificaran
     si una casilla esta vacia para pasar al siguiente, si esta sola guardarla en extra
     si tiene mas guardarla en tablas con las cordenadas obtenidas.
  5. primero comenzL
  6. Nos devuelve un array de objetos donde las propiedades de estos objetos son el los
     limitadores de las tablas (initialX finalX row) (initialY finalY column)

---

## 2. Análisis del Problema

- **Entradas:** Un array bidimencional (representando un xlsx)
- **Salidas:** Un array de objetos, donde cada objeto tenga la posicion inicial de
  donde se edentifico el primer valor y ultimo en ambos ejes (x y)
- **Errores potenciales:** Que de incorrectamente los parametros de las tablas.

---

## 4. Anotaciones de los problemas en el desarrollo

1. creacion de las funciones principales.
