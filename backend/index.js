require('reflect-metadata');
const express = require('express');
const { createConnection } = require('typeorm');
const cors = require('cors');
const ItemController = require('./src/api/ItemController')

const PORT = 3000;

async function startup() {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());

  //Routes
  app.post('/item', ItemController.saveItems)
  app.get('/item', ItemController.getItems)

  app.listen(PORT, () => {
    console.log('App running on PORT ' + PORT);
  });
}

startup();
