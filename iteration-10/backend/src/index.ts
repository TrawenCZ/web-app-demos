import express from "express";
import { channel, message, user } from "./resources";
import cors from "cors";

const api = express();
const port = process.env.PORT ?? 4000;

api.use(express.json());
api.use(cors());

api.get("/user", user.get);
api.get("/user/:id", user.getById);
api.put("/user", user.update);

api.get("/channel", channel.get);
api.get("/channel/:id", channel.getById);
api.post("/channel", channel.store);

api.post("/message", message.store);
api.put("/message/:id", message.update);
api.delete("/message/:id", message.remove);

api.listen(port, () => console.log(`Example app listening on port ${port}`));
