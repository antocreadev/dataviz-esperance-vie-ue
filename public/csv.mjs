import fs from "fs";

const HEADER_ROW = 0;
const SPLITER = ",";

function csvToJson(csv) {
  // Split the CSV string into an array of rows
  const rows = csv.split("\n");

  // Get the column names from the first row
  const headers = rows[HEADER_ROW].split(SPLITER);

  // Create an array to hold the JSON objects
  const json = [];

  // Loop through the rows, starting at the second row (index 1)
  for (let i = 1; i < rows.length; i++) {
    // Create an object to represent this row of data
    const data = {};

    // Split the row into an array of values
    const values = rows[i].split(SPLITER);

    // Loop through the values and assign them to the corresponding property of the data object
    for (let j = 0; j < values.length; j++) {
      data[headers[j]] = values[j];
    }

    // Push the data object to the json array
    json.push(data);
  }

  // Return the json array
  return json;
}

// Read the contents of the CSV file
// Fire type : Forêt, A partir du : 01/01/2017, jusqu'au : 12/12/2022, Departement : HAUTE-CORSE (2B)
const csv = fs.readFileSync(process.argv[2], "utf8");

// Convert the CSV string to JSON
const json = csvToJson(csv);

fs.writeFileSync(process.argv[3], JSON.stringify(json));
