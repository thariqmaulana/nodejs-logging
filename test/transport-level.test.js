import winston, {error, info, log} from "winston";

test("create new logger with console and file transport", () => {
  
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log"
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error-log.log"
      })
    ]
  });

  logger.info("Hello World");
  logger.info("Hello World 2");
  logger.info("Hello World 3");
  logger.error("hello error");
})