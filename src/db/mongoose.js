// const mongoose = require("mongoose");
// const env = require("../../env");
// const DB_NAME = env.DB_NAME;
// const PORT = env.DB_PORT;
// const HOST_IP = env.HOST_IP;
// const appLoger = require("../utils/app-logger");

// const connection = () => {
//   try {
//     mongoose.connect(`mongodb://${HOST_IP}:${PORT}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });
//     mongoose.connection.on("connected", function () {
//       console.log(
//         `connected to database ${HOST_IP}:${PORT} database name ${DB_NAME}`,
//         "info",
//         `connected to database ${HOST_IP}:${PORT} database name ${DB_NAME}`
//       );
//     });
//     mongoose.connection.on("error", function (err) {
//       console.log(
//         `failed to connect database >>  database name ${DB_NAME} \n error : ${err}`,
//         "error",
//         `failed to connect database >>  database name ${DB_NAME} \n error : ${err}`
//       );
//     });
//   } catch (error) {
//     console.log(error, "error", error.message);
//   }
// };

// connection();
