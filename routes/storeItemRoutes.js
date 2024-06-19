const router = require("express").Router();
const storeItemController = require("../controllers/storeItemController");
router.get("/", storeItemController.getStoreItems);
router.post("/", storeItemController.addStoreItem);
router.put("/:id", storeItemController.editStoreItem);
router.delete("/:id", storeItemController.deleteStoreItem);

module.exports = router;
