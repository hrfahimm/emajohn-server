const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 5000;
//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yalniug.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("connected to MongoDB!");
    const database = client.db("emajohn");
    const productCollection = database.collection("products");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
//   DB_USER=emajohn
// DB_PASS=VEsChD7145e4ZrUz
  res.send("running ginius server");
});

app.listen(port, () => {
  console.log(port);
});


