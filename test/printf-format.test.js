import winston, {info, log} from "winston";

test("logging with printf format", () => {
  
  
  const logger = winston.createLogger({
    //info ini adalah log kita
    format: winston.format.printf(info => {
      //simple() seperti ini 
      // return `${info.level}: ${info.message}`;
      //yang json
      // return JSON.stringify(info);
      //isi info itu seperti kita membuat logger.log tanpa shortcut

      // return `${info}`; object tentu saja

      return `${new Date()} - ${info.level.toUpperCase()}: ${info.message}`
    }),
    transports: [
      new winston.transports.Console({})
    ]
  });

  logger.error("Hello Format");
  logger.warn("Hello Format");
  logger.info("Hello Format");
})