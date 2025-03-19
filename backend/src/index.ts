import { createServer } from "http";
import { Server } from "socket.io";

import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const httpServer = createServer();

httpServer.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
