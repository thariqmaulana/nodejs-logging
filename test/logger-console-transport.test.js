import winston, {log} from "winston";

test("create new logger with console transport", () => {
  
  //buat dulu loggernya
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.log({
    level: "info",
    message: "Hello Logging"
  })
})