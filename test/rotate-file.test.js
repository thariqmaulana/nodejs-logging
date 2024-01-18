import winston, {error, info, log} from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logging with daily rotate file", () => {
  
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        // akan diganti menjadi tanggal
        filename: "app-$DATE$.log",
        //file lama akan di archive. biar ukurannya kecil
        zippedArchive: true,
        //max 1mb. lebih dari itu akan membuat file baru
        //jadi tidak akan menumpuk
        maxSize: "1m",
        //akan disimpan selama 7 hari. setelah itu dihapus
        maxFiles: "7d"
      })
    ]
  });

  for (let i = 0; i < 100000; i++) {
    logger.info(`Hello World ${i}`);
    
  }
})