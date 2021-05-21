import express, { json } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import { host, port, whitelist } from "./environment";
import routes from "./routes";

const app = express();
app.use(
  cors({
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true,
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);
app.use(json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`🚀 Server ready at ${host}:${port}`);
});
