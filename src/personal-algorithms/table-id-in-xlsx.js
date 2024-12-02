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

  for (let i = 0; i < excel.length; i++) {
    for (let ii = 0; ii < excel[i].length; ii++) {
      if (excel[i][ii] == null) continue;
    }
  }
};

const evaluationRows = (i, ii) => {};

const generateTable = (array, params) => {};

// functions helpers

const storeTableRange = () => {};

const storeExtraValue = () => {};

const isTwoDimensionalArray = (array) =>
  array.some((item) => Array.isArray(item));

// functions calling
findTable(excelSheet);
