const db = require("../models");

exports.addProducts = async (req, res) => {
  const { model_name, model_number, specifications, item_count } = req.body;

  if (!model_name || !model_number || !specifications) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = await db.Product.create({
      model_name,
      model_number,
      specifications,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll();

    const count = await db.Product.count();

    res.status(200).json({ products, total: count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.editProduct = async (req, res) => {
  const { model_name, model_number, specifications } = req.body;
  const { id } = req.params;
  if (!model_name || !model_number || !specifications) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const product = await db.Product.findOne({ where: { product_id: id } });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.model_name = model_name;
    product.model_number = model_number;
    product.specifications = specifications;
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await db.Product.findOne({ where: { product_id: id } });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
