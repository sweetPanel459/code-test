// la funcion me debe los parametros (initial final de row y column) de cada tabla, por ejemplo:
// para la primera tabla, row: initial: 1, final: 4, column: initial: 1, final: 3

const excelSheet = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, "a1", "a1", "a1", "a1", null, "e1", "e1", "e1", null], // ejemplo: tenemos ya los valores de la primera tabla (a) 1-4, ademas con estos valores vamos viendo
  [null, "a2", "a2", "a2", "a2", null, "e2", "e2", "e2", null], // si hay alguna concidencia en el rango en la siguiente fila
  [null, "a3", "a3", "a3", "a3", null, "e3", "e3", "e3", null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "b1", "b1", "b1", "b1", null, "c1", "c1", "c1", null],
  [null, "b2", "b2", "b2", "b2", null, "c2", "c2", "c2", null],
  [null, "b3", "b3", "b3", "b3", null, "c3", "c3", "c3", null],
  [null, null, null, null, null, null, null, null, null, null],
];

// main function

const findTable = (excel) => {
  if (!isTwoDimensionalArray(excel)) return;

  const extraValues = [];
  const tablesFound = [];

  let matchValue = false;
  let lenghtRangeRow = 0;

  // NOTE:
  // - Hacer una funcion que guarde el length en un objeto y su posicion absoluta con respecto al verdadero array
  //   esto para poder evalur consecutivamente si tiene abajo
  // TODO:
  // 1. Crear una funcion que evalue si las casillas tiene el valor null y retornar false :hecho:
  // 2. Crear una funcion que si es true (casilla!==null) va creando un objeto con el valor total de lenghtRange
  //    y con la posicion de cuando empezo y finalizo, cuando haya finalizado retornar un objeto completo con el
  //    rango y length de donde se encontro valores. Length, initialRow y finalRow.
  // 3. una funcion que se le pasa el objeto anterior y evalue, si un valor es unico, que lo busque en el array
  //    original y lo guarde en extraValues.
  // 4. Funcion que una vez se haya finalizado la evaluacion y creacion de los objetos anteriores este analizara
  //    si hay alguna concidencia respecto a las filas (si estan alineadas) y crear un objeto mas normalizado con
  //    los parametros de cada tabla. InitialRow, finalRow, InitialColumn y finalColumn

  for (let i = 0; i < excel.length; i++) {
    for (let ii = 0; ii < excel[i].length; ii++) {
      matchValue = theIndexIsNull(excel, i, ii);
      if (matchValue) {
        lenghtRangeRow++;
      } else lenghtRangeRow = 0;
    }
  }
};

const evaluationRows = (i, ii) => { };

const generateTable = (array, params) => { };

// functions helpers

const storeTableRange = () => { };

const storeExtraValue = () => { };

const theIndexIsNull = (excel, i, ii) => (excel[i][ii] == null ? false : true);

const isTwoDimensionalArray = (array) =>
  array.some((item) => Array.isArray(item));

// functions calling
findTable(excelSheet);
