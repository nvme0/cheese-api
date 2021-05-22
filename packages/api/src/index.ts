import app from "./app";
import { host, port } from "./environment";

app.listen(port, () => {
  console.log(`🚀 Server ready at ${host}:${port}`);
});
