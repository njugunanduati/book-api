import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const { 
    PORT
} = process.env;


// //Books data
// const booksData = [
//     {
//       id: 1,
//       title: "A Color of His Own",
//       author: "Leo Lionni"
//     },
//     {
//       id: 2,
//       title: "Fishing in the Air",
//       author: "Sharon Creech"
//     },
// ];

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
});

console.log(`🚀  Ello book Api is ready at: ${url}`);
