import { templateJson, inputJson } from "../constants/input-json-analysis.js";

// main function

//todo:
//  1. la detecion de anomalias debe retornar el indice y los objetos anomalos
//  2. creacion de la funcion de filtraciob
const salesGroupingAndAnalysis = () => {
  let monthlyListing = {};

  for (let i = 0; i < inputJson.length; i++) {
    const wrongObj = [];

    const isValid = confirmObjectFormat(inputJson[i], templateJson);
    const thereIsAnomalousData = anomalyDataDetection(inputJson[i], wrongObj);
    const filteredObject = objectLeak(thereIsAnomalousData);

    if (!isValid) return;
  }

  const generalSummaryPart = generalSummary(inputJson);
};

// helpers functions

const confirmObjectFormat = (object, template) => {
  for (const key in template) {
    if (!object.hasOwnProperty(key)) return false;
    return true;
  }
};

const anomalyDataDetection = (object, wrongObj) => {
  const validationRules = [
    { conditional: object.Cantidad <= 0 },
    { conditional: object.Precio_unitario <= 0 },
  ];

  for (const rule of validationRules) {
    if (rule.conditional) wrongObj.push(object);
  }

  return anomalousObjects;
};

const objectLeak = () => { };

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

// main call

salesGroupingAndAnalysis();
