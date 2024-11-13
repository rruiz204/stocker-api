import winston from "winston";

const LogFile = new winston.transports.File({
  filename: "stocker.log"
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [LogFile],
});

export default logger;