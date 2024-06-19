const db = require("../models");

exports.addStoreItem = async (req, res) => {
  const {
    manufacturer,
    model_name,
    product_serial_number,
    purchase_date,
    warranty_expiration_date,
    condition,
    status,
  } = req.body;

  if (!manufacturer) {
    return res.status(400).json({ message: "Manufacturer are required" });
  }

  if (!model_name) {
    return res.status(400).json({ message: "Model name are required" });
  }

  if (!product_serial_number) {
    return res
      .status(400)
      .json({ message: "Product serial number are required" });
  }

  if (!purchase_date) {
    return res.status(400).json({ message: "Purchase date are required" });
  }

  if (!warranty_expiration_date) {
    return res
      .status(400)
      .json({ message: "Warranty expiration date are required" });
  }

  if (!condition) {
    return res.status(400).json({ message: "Condition are required" });
  }

  if (!status) {
    return res.status(400).json({ message: "Status are required" });
  }

  try {
    const storeItem = await db.StoreItem.create({
      manufacturer,
      model_name,
      product_serial_number,
      purchase_date,
      warranty_expiration_date,
      condition,
      status,
    });
    res.status(200).json(storeItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getStoreItems = async (req, res) => {
  try {
    const count = await db.StoreItem.count();
    const storeItems = await db.StoreItem.findAll();
    res.status(200).json({ storeItems, total: count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.editStoreItem = async (req, res) => {
  const {
    manufacturer,
    model_name,
    product_serial_number,
    purchase_date,
    warranty_expiration_date,
    condition,
    status,
  } = req.body;
  const { id } = req.params;
  if (!manufacturer) {
    return res.status(400).json({ message: "Manufacturer are required" });
  }

  if (!model_name) {
    return res.status(400).json({ message: "Model name are required" });
  }

  if (!product_serial_number) {
    return res
      .status(400)
      .json({ message: "Product serial number are required" });
  }

  if (!purchase_date) {
    return res.status(400).json({ message: "Purchase date are required" });
  }

  if (!warranty_expiration_date) {
    return res
      .status(400)
      .json({ message: "Warranty expiration date are required" });
  }

  if (!condition) {
    return res.status(400).json({ message: "Condition are required" });
  }

  if (!status) {
    return res.status(400).json({ message: "Status are required" });
  }

  try {
    const storeItem = await db.StoreItem.findOne({
      where: { store_number: id },
    });
    if (!storeItem) {
      return res.status(404).json({ message: "Store item not found" });
    }
    storeItem.manufacturer = manufacturer;
    storeItem.model_name = model_name;
    storeItem.product_serial_number = product_serial_number;
    storeItem.purchase_date = purchase_date;
    storeItem.warranty_expiration_date = warranty_expiration_date;
    storeItem.condition = condition;
    storeItem.status = status;
    await storeItem.save();
    res.status(200).json(storeItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deleteStoreItem = async (req, res) => {
  const { id } = req.params;
  try {
    const storeItem = await db.StoreItem.findOne({
      where: { store_number: id },
    });
    if (!storeItem) {
      return res.status(404).json({ message: "Store item not found" });
    }
    await storeItem.destroy();
    res.status(200).json({ message: "Store item deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
