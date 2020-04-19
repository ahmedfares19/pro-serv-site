const chalk = require("chalk");
const fs = require("fs");
var uuid = require("uuid");
const env = require("../../env");
const logLevel = env.LOG_LEVEL;
const debugFilePath = env.DEBUG_LOGS;
const errorFilePath = env.ERROR_LOGS;
let line = "*****************************";
if (!fs.existsSync(debugFilePath)) {
  fs.writeFileSync(debugFilePath, "====== DEBUG FILE START ======");
}
if (!fs.existsSync(errorFilePath)) {
  fs.writeFileSync(errorFilePath, "====== ERROR FILE START ======");
}

const debugLevel = (toFile = "no data", type, ToConsole = "no data") => {
  let logID = uuid.v1();
  if (logLevel == "LOCAL") {
    
      const time = new Date();
      fs.appendFileSync(
        debugFilePath,
        "\n[ " +
          type +
          " level ]\nLOG ID :  [ " +
          logID +
          " ]" +
          "\nTIME :  " +
          time +
          "\n[ debug data ]\n" +
          toFile +
          "\n[ console data ]\n"+
          ToConsole+'\n'
      );
      fs.appendFileSync(
        debugFilePath,
        "\n*****************************************************\n"
      );
    }

    if (type == "info") {
      const coloredText = chalk.green.bold(ToConsole);
      const info = "\n INFO : ";
      logID = chalk.green("log id [ " + logID + " ]");
      console.log(chalk.bgGreen.black.bold(info));
      console.log(logID );
      console.log(coloredText + '\n');
    } else if (type == "error") {
      const time = new Date();
      fs.appendFileSync(
        errorFilePath,
        "\n[ " +
          type +
          " level ]\nLOG ID :  [ " +
          logID +
          " ]" +
          "\nTIME :  " +
          time +
          "\n[ debug data ]\n" +
          toFile +
          "\n[ console data ]\n"+
          ToConsole+'\n'
      );
      fs.appendFileSync(
        debugFilePath,
        "\n*****************************************************\n"
      );

      const coloredText = chalk.red(ToConsole);
      const info = "\n ERROR : ";
      console.log('\n'+chalk.bgRed.white.bold(info));
      logID = chalk.red("log id [ " + logID + " ]");
      console.log(logID );
      console.log(coloredText+'\n\n');

    } else if (type == "debug") {
      const coloredText = chalk.blue(ToConsole);
      const info = "\n DEBUG : ";
      console.log('\n'+chalk.bgBlue.black.bold(info));
      logID = chalk.blue("log id [ " + logID + " ]");
      console.log(logID );
      console.log(coloredText);
    
  } else if ("production") {
    const coloredText = chalk.red.w.bold(ToConsole);
    console.log(coloredText);
  }
};

const logger = {
  debug: debugLevel,
};

module.exports = logger;
