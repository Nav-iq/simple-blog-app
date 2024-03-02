const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    //-------for checking if alreaedy has connection------------
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }
    //----------------------------------------------------------
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Error Connecting To DataBase ", error);
  }
};
