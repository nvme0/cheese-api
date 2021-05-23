import express, { json, static as serveStatic } from "express";
import path from "path";
import cors from "cors";
import * as swaggerUI from "swagger-ui-express";
import * as dotenv from "dotenv";
dotenv.config();

import { whitelist } from "./environment";
import routes from "./routes";
import swaggerDocumentV1 from "./routes/api/v1/swagger.json";

const app = express();
app.use(
  cors({
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true,
    origin: (origin, callback) => {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);
app.use(json());
app.use(serveStatic(path.join(__dirname, "..", "build")));
app.use("/", routes);
app.use("/docs/api/v1", swaggerUI.serve, swaggerUI.setup(swaggerDocumentV1));

export default app;
