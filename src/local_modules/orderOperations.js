const lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapter = new fileSync("./assets/data/database.json");
const database = lowdb(adapter);
const {
  v1: uuidv1
} = require('uuid');


exports.addToOrders = orderInfo => {
  const addOrder = database
    .get("orders")
    .push({
      orderNumber: orderInfo.id,
      timeStamp: uuidv1(), //uuidv1(),
      Items: orderInfo.items,
      totalValue: orderInfo.value
    })
    .write();
  let response = {
    success: true,
    status: "201",
    message: "Successfully confirmed order.",
    data: addOrder
  };

  return response;
};

exports.findFromOrders = orderNumber => {
  const findOrder = database
    .get("orders")
    .filter({
      orderNumber: orderNumber
    })
    .write();

  let response = {
    success: true,
    status: "200",
    message: "Orders found",
    data: findOrder
  };

  return response;
}

/*** INITIATE DATABASE IF THERE IS NONE ***/
exports.initiateDatabase = () => {
  const ordersInit = database.has("orders").value();
  if (!ordersInit) {
    database.defaults({
      orders: []
    }).write();
  }
};