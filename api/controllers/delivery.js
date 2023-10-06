const Delivery = require("../models/delivery");

module.exports = {
  async read(request, response) {
    const appList = await Delivery.find();

    return response.json(appList);
  },
  async create(request, response) {
    console.log(request.body)
    const appCreated = await Delivery.create(request.body);
    return response.json(appCreated);
  },
};
