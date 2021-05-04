import { gql } from 'apollo-server-express';

const bookType = gql`
    type Book {
        id: ID!
        title: String!
        description: String!
        ISBN: String!
        images: String!
        quantity: Int!
    }

    type Query {
        getBooks: [Book]
        getBook(id: ID!): Book
    }

    type Mutation {
        addBook(title: String!, description: String!, ISBN: String!, images: String!, quantity: Int!): Book

        updateBook(
            id: ID!
            title: String!
            description: String!
            ISBN: String!
            images: String!
            quantity: Int!
        ): String

        deleteBook(id: ID!): String
    }
`;

export default bookType;
