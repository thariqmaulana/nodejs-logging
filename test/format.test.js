import winston, {log} from "winston";

test("logging with format", () => {
  
  //buat dulu loggernya
  const logger = winston.createLogger({
    // format: winston.format.json(), defaultnya
    // format: winston.format.logstash()
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.error("Hello Format");
  logger.warn("Hello Format");
  logger.info("Hello Format");
})