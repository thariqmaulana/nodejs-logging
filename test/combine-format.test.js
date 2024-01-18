import winston, {info, log} from "winston";

test("logging with combine format", () => {
    
  const logger = winston.createLogger({
    format: winston.format.combine(
      //urutannya berguna
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.simple()
    ),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.error("Hello Format");
  logger.warn("Hello Format");
  logger.info("Hello Format");
})