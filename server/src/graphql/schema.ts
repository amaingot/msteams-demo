import { gql } from "apollo-server-express";
const schema = gql`
  scalar DateTime

  type Query {
    now: DateTime
  }
`;

export default schema;
