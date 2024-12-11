import { templateJson, inputJson } from "../constants/input-json-analysis.js";

// main function

const salesGroupingAndAnalysis = () => {
  //for para cada objeto
  for (let i = 0; i < inputJson.length; i++) {
    const isValid = confirmObjectFormat(inputJson[i], templateJson);
    if (isValid) return;
  }
};

// helpers functions

const confirmObjectFormat = (object, template) => {
  for (const key in template) {
    if (!object.hasOwnProperty(key)) return false;
    return true;
  }
};

//
salesGroupingAndAnalysis();
