import { inputJson } from "../constants/input-json-analysis.js";

// main function

const salesGroupingAndAnalysis = () => {
  confirmFormat(inputJson);
};

// helpers functions

const confirmFormat = (json) => {
  const objectTemplate = {
    Id_transaccion: null,
    Fecha: null,
    Categoria: null,
    Producto: null,
    Region: null,
    Cantidad: null,
    Precio_unitario: null,
  };

  const hasAllProperties = 0;

  for (let i = 0; i < json.length; i++) {
    const jsonObjects = json[i];
  }
};

const generalSummary = () => { };
const salesGenerated = () => { };
const salesByCategoryAndProducts = () => { };
const monthlySeasonality = () => { };
const abnormalDataDetection = () => { };

// calls
//
salesGroupingAndAnalysis();
