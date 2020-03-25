const express = require('express')
const cors = require('cors')
const app = express()

const beansRouter = require('./routes/beans')
const dbOperations = require('./local_modules/orderOperations')
const orderRouter = require('./routes/orders')
const PORT = 5000


app.use(cors())
app.use(express.json())
app.use('/api/beans', beansRouter)
app.use('/api/', orderRouter)



app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
  dbOperations.initiateDatabase();
});