import { gql } from 'apollo-server';

// GraphQL Schema
const typeDefs = gql`
    type Query {
        book(id: Int!): Book
        books: [Book]
    }
    type Mutation {
        add_book(title: String!, author: String!): Book
        update_book(id: Int!, title: String, author: String): Book
        delete_book(id: Int!): Book
    }
    type Book {
        id: ID!
        title: String
        author: String
    }
`;

export default typeDefs;