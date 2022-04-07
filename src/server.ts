import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import dbConfig from "./db/ormconfig";
import dotenv from 'dotenv';

dotenv.config()

createConnection(dbConfig)
  .then(() => {
    const PORT = process.env.PORT ?? 3000;
    console.log("Database connected");
    app.listen(PORT, () =>
      console.log(`App is running on http//localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
