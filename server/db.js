import mongodb from 'mongodb';

const connectionString = process.env.MONGODB_CONNECTION_STRING;

if (!connectionString) {
  throw new Error(
    'You must set up the MONGODB_CONNECTION_STRING process variable.',
  );
}

const client = new mongodb.MongoClient(connectionString, {
  useUnifiedTopology: true,
});

export const getCollection = (name) => client.db('labs').collection(name);

export default client;