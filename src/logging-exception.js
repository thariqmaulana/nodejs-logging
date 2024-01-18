
import winston from "winston";

  //tidak perlu test karena ini real aplikasi nodejs kita  
  //buat dulu loggernya
  const logger = winston.createLogger({
    // handleExceptions. semua transport akan dapat
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        handleExceptions: true,
        filename: "exception.log"
      }),
    ]
  })
//tidak terjadi error pada aplikasi kita
hello();