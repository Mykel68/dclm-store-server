const router = require("express").Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getProducts);
router.post("/", productController.addProducts);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
