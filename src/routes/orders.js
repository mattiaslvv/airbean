const {
  Router
} = require('express')
const router = new Router()
const bodyParser = require("body-parser");
const orderOperations = require("../local_modules/orderOperations");
import {
  v4 as uuidv4
} from 'uuid';

router.get('/profile', async (req, res) => {
  const orderNumber = req.query.uuid
  const data = await orderOperations.findFromOrders(orderNumber)
  res.send(data)
});

router.post('/profile', async (req, res) => {
  const orderInfo = req.body
  const data = await orderOperations.addToOrders(orderInfo)
  res.send(data)
});

router.get('/key', (req, res) => {
  const key = uuidv4();
  res.send(key)
})

module.exports = router