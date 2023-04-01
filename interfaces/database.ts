import {Db, MongoClient, ServerApiVersion} from "mongodb";

const uri = process.env.MONGODB_URI;

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase(): Promise<{ db: Db }> {
  if (cachedClient && cachedClient) {
    return { db: cachedDb };
  }

  cachedClient = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedDb = cachedClient.db();

  return { db: cachedDb };
}
