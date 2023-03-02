const { findTesteCogny  } = require('./findTesteCogny');

async function sumPopulationNode(db) {
  console.log("Calculando a soma das Populações de 2018, 2019 e 2020...");
  try {
    const result = await findTesteCogny(db);
    const data = result.doc_record;
    const sum = data.reduce((acc, crr) => {
      const { Population, Year } = crr;
      if (2018 <= Year && Year <= 2020) {
        return acc = acc + Population;
      }
      return acc;
    }, 0);
  
    return `A soma é de ${sum}`;
  } catch(e) {
    console.log(e);
  }
}

module.exports = { sumPopulationNode };
