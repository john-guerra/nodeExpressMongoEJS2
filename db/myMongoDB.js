const { MongoClient } = require("mongodb");

async function getFires() {
  let db, client;

  try {
    const uri = "mongodb://localhost:27017";
    client = new MongoClient(uri);
    await client.connect();

    console.log("Connected to Mongo Server");

    db = client.db("wildFires");
    const firesCollection = db.collection("Fires");

    // MQL 👉 json
    const query = {};
    return await firesCollection.find(query).limit(20).sort({ _id: -1 }).toArray();
  } finally {
    await client.close();
  }
}

module.exports.getFires = getFires;

getFires();
