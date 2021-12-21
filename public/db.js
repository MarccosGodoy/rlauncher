const fs = require("fs");
const dbFunctions = {};
//Config db

//Read db or create if doesn't exist
dbFunctions.getData = async () => {
  try {
    const db = fs.readFileSync("db.json", "utf-8");
    return JSON.parse(db);
  } catch (error) {
    const model = {
      database: {
        lang: "es",
        path: "F:\\Riot Games\\Riot Client\\RiotClientServices.exe",
      },
    };
    const newDb = JSON.stringify(model);
    fs.writeFileSync("db.json", newDb);
    const db = fs.readFileSync("db.json", "utf-8");
    return JSON.parse(db);
  }
};

//Save newData
dbFunctions.writeData = async (key, value) => {
  try {
    let db = fs.readFileSync("db.json", "utf-8"); //Read file
    let stored = JSON.parse(db);
    stored.database[key] = value;
    let toStore = JSON.stringify(stored);
    fs.writeFileSync("db.json", toStore); //Write file
    db = fs.readFileSync("db.json", "utf-8"); //Read File
    return await JSON.parse(db);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbFunctions;