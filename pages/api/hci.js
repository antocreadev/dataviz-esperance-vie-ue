const fs = require("fs");
import xml from "xml-js";

module.exports = (req, res) => {
  // get the file path from directory public
  const filePath = `${process.cwd()}/public/data/hci.xml`;

  // read the XML file and convert it to a string
  const xmlString = fs.readFileSync(filePath, { encoding: "utf-8" });

  // convert the XML string to JSON
  const json = JSON.parse(xml.xml2json(xmlString, { compact: true }));

  // return the JSON in the response
  res.json(json);
};
