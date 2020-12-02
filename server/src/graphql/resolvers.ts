import { Resolvers } from "./generated";
import { GraphQLScalarType } from "graphql";
import { UserInputError } from "apollo-server-express";


const resolvers: Partial<Resolvers> = {
  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "Date time represented as an ISO String",
    parseValue: value => {
      try {
        return new Date(value);
      } catch (e) {
        throw new UserInputError("Invalid DateTime input");
      }
    },
    serialize: (value: Date) => {
      return value.toISOString();
    }
  }),
  Query: {
    now: () => new Date()
      }
};

export default resolvers;
