import { gql } from 'apollo-server-express';

const authorType = gql`
    type Author {
        id: ID!
        name: String!
        country: String!
        image: String!
    }

    type Query {
        getAuthors: [Author]
        getAuthor(id: ID!): Author
    }

    type Mutation {
        addAuthor(name: String!, country: String!, image: String!): Author

        updateAuthor(id: ID!, name: String!, country: String!, image: String!): String

        deleteAuthor(id: ID!): String
    }
`;

export default authorType;
