import express from 'express'
import { accommodations, reservations, users } from './resources'
import path from "path";

const api = express()

/**
 * Make express parse JSON in body and parse url encoded strings
 */
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.set("views", path.join(__dirname, "views"));
api.set("view engine", "pug");

/**
 * Serve static content from public directory for images
 */
api.use(express.static("public"));

/**
 * Send greetings to API Client
 */
api.get('/', (req, res) => res.send({
  status: "success",
  data: {},
  message: "Welcome to my API"
}));

/**
 * Resource accommodations
 */
api.put('/api/accommodations/:id', accommodations.update);
api.post('/api/accommodations', accommodations.store);
api.get('/api/accommodations', accommodations.list);

/**
 * Resource reservations
 */
api.post('/api/reservations', reservations.make)
api.put('/api/reservations/:id', reservations.pay);
api.delete('/api/reservations/:id', reservations.cancel);
api.get('/api/reservations', reservations.list)

api.get('/api/users', users.list)


api.get("/accommodations/:id", async (req, res) => {
  const params = await accommodations.getOne(req.params.id);
  if (!params) {
    return res.status(400).send({
      status: "error",
      data: {},
      message: "Invalid id parameter"
    });
  }
  res.render("accommodation", params);
});

api.get("/accommodations", async (req, res) => {
  const params = await accommodations.getAll();
  res.render("index", {accommodations : params});
});

/**
 * Start listening on connections
 */
const port = process.env.PORT || 3000
api.listen(port, () => console.log(`App listening on port ${port}`))
