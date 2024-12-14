import { templateJson, inputJson } from "../constants/input-json-analysis.js";

// main function

const salesGroupingAndAnalysis = () => {
  for (let i = 0; i < inputJson.length; i++) {
    const isValid = confirmObjectFormat(inputJson[i], templateJson);
    if (!isValid) return;
  }

  const generalSummaryPart = generalSummary(inputJson);
  console.log(generalSummaryPart);
};

// helpers functions

const confirmObjectFormat = (object, template) => {
  for (const key in template) {
    if (!object.hasOwnProperty(key)) return false;
    return true;
  }
};

// TODO :
// 1. Validacion de que la fecha no sea superior a la fetcha de hoy.
// 2. Validacion de que la cantidad no sea negativa.
// 3. Validacion de que el precio no sea negativo.

const AnomalyDataDetection = (object) => {
  const validationRules = {
    amount: object.Cantidad < 0,
  };
};

const generalSummary = (object) => {
  let totalIncome = 0;
  let totalProducts = 0;
  let totalTransactions = 0;

  for (const index of object) {
    totalIncome += index.Cantidad * index.Precio_unitario;
    totalProducts += index.Cantidad;
    totalTransactions += 1;
  }

  return {
    total_ingresos: totalIncome,
    total_unidades_vendidas: totalProducts,
    total_transacciones_procesadas: totalTransactions,
  };
};

// utils functions

const isFutureDate = () => { };
// main call

salesGroupingAndAnalysis();
