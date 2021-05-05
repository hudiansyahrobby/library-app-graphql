import express from 'express';
import TypeDefs from './typeDefs';
import Resolvers from './resolvers';
import cors from 'cors';
import { config } from 'dotenv';
import { ApolloServer } from 'apollo-server-express';
import initDB from './helpers/initDB';

config();

initDB();
const PORT = process.env.PORT || 8000;

const server = new ApolloServer({
    typeDefs: TypeDefs,
    resolvers: Resolvers,
});

const app = express();

app.use(cors());

app.use(express.json());

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`🚀 Server ready at ${PORT}`));
