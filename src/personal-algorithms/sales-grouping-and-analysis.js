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

const AnomalyDataDetection = () => { };

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

// main call

salesGroupingAndAnalysis();
