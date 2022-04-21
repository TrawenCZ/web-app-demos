import express from 'express'
import { accommodations, reservations } from './resources'

const api = express()

/**
 * Make express parse JSON in body and parse url encoded strings
 */
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

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
  message: "Welcome to our API"
}));

/**
 * Resource accommodations
 */
api.put('/api/accommodations/:id', accommodations.update);
api.get('/api/accommodations', accommodations.list);
api.post('/api/accommodations', accommodations.store);
api.get('/api/accommodations', accommodations.get);

/**
 * Resource reservations
 */
api.put('/api/reservations', reservations.make)
api.post('/api/reservations/:id', reservations.pay);
api.delete('/api/reservations/:id', reservations.cancel);

/**
 * Start listening on connections
 */
const port = process.env.PORT || 3000
api.listen(port, () => console.log(`Example app listening on port ${port}`))
