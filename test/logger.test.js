import winston, { log } from "winston";

test("create new logger", () => {
  
  //buat dulu loggernya
  const logger = winston.createLogger({});

  logger.log({
    level: "info",
    message: "Hello Logging"
  })
})