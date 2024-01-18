import winston, {log} from "winston";

test("create new logger with console and file transport", () => {
  
  //buat dulu loggernya
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log"
      }),
      new winston.transports.File({
        filename: "application2.log"
      })
    ]
  });

  //di dalam file 2 kali running bukan ditimpa, tapi 2 kali lipat. kan log sesuai jalannya
  // aplikasi
  logger.info("Hello World");
  logger.info("Hello World 2");
  logger.info("Hello World 3");
})