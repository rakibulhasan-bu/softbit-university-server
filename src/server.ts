import app from "./app/app";
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
  try {
    mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Softbit University app is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
