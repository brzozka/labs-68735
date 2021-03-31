import mongodb from 'mongodb';

const connectionString = 'mongodb://brzozka:NsskA4txPPOVqSnd6NPHwJIjEW8t9qFkt4TMbt4E3dYaHLlntx7VINE0pReLEJfOblokjaEjF4FwCNE1JtjEJA==@brzozka.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@brzozka@';

const client = new mongodb.MongoClient(connectionString, {
  useUnifiedTopology: true,
});

export const getCollection = (name) => client.db('labs').collection(name);

export default client;