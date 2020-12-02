import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { GraphqlContext } from "./graphql/context";
import { appLogger, appErrorLogger, logger } from "./utils/logger";
import renderHtml from "./utils/renderHtml";
import serveStaticAssets from "./utils/serveStaticAssets";

const config = {
  name: "msteams-demo",
  port: 8080,
  host: "0.0.0.0",
};

const app = express();

app.use(appLogger());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  debug: true,
  introspection: true,
  playground: true,
  cacheControl: {
    defaultMaxAge: 500,
  },
  context: async (req: Request, res: Response): Promise<GraphqlContext> => {
    return {
      req,
      res,
    };
  },
});

server.applyMiddleware({ app });


app.use(appErrorLogger());

app.use(serveStaticAssets());

app.get("/*", renderHtml);

app.listen(config.port, config.host, (e) => {
  if (e) {
    throw new Error("Internal Server Error");
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
