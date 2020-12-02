import expressWinston from "express-winston";
import winston from "winston";
import config from "./config";

export const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

export const appLogger = () =>
  expressWinston.logger({
    winstonInstance: logger,
    level: "info",
    meta: true,
    colorize: config.get("NODE_ENV") !== "production",
  });

export const appErrorLogger = () =>
  expressWinston.errorLogger({
    winstonInstance: logger,
    level: "info",
  });
