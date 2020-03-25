const {
  Router
} = require('express')
const router = new Router()
const orderOperations = require("../local_modules/orderOperations");
const {
  v4: uuidv4
} = require('uuid');


router.get('/', async (req, res) => {
  const orderNumber = req.query.uuid
  const data = await orderOperations.findFromOrders(orderNumber)
  res.send(data)
});

router.post('/', async (req, res) => {
  const orderInfo = req.body
  const data = await orderOperations.addToOrders(orderInfo)
  res.send(data)
});

router.get('/key', (req, res) => {
  const key = uuidv4() //uuidv4();
  res.send(key)
})

module.exports = router