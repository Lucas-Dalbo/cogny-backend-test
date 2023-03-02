async function sumPopulationSQL(db) {
  console.log("Realizando operações no banco de dados...")
  const [result] = await db.query(
    "SELECT SUM(J.population) FROM ( "+
    "SELECT CAST(arr.item_object->'Population' AS INTEGER) as population, " +
    "arr.item_object->>'Year' as year " +
    "FROM lucasdalbo98189891.api_data, " +
    "jsonb_array_elements(doc_record) with " +
    "ordinality arr(item_object, position) " +
    "WHERE api_name = ${name} " +
    ") AS J WHERE J.year='2018' OR J.year='2019' OR J.year='2020'",
    { name: "teste-cogny"}
  );

  return `A soma é de ${result.sum}`;
}

module.exports = { sumPopulationSQL };

// referência para a construção da query:
// https://levelup.gitconnected.com/working-with-a-jsonb-array-of-objects-in-postgresql-d2b7e7f4db87
