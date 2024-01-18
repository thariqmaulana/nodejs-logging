import winston from "winston";

//confignya seperti exception
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      //handle exception juga harus true
      handleExceptions: true,
      handleRejections: true,
      filename: "rejection.log"
    }),
  ]
})

async function callAsync() {
  return Promise.reject("rejected");
}

//undhandled rejection
callAsync();