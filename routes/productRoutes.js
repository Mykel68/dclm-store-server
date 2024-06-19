const router = require("express").Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getProducts);
router.post("/", productController.addProducts);
router.put("/:id", productController.editProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
/**
 * @swagger
 * /api/products:
 
 *  get:
 *    summary: Get all products
 *    tags: 
 *      - Products
 *    description: Get all products
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: Internal server error
 *  post:
 *    summary: Add a new product
 *    tags:
 *      - Products
 *    description: Add a new product
 *    parameters:
 *      - in: body
 *        name: product
 *        schema:
 *          type: object
 *          properties:
 *            model_name:
 *              type: string
 *            model_number:
 *              type: string
 *            specifications:
 *              type: string
 *        required: true
 * 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              model_name:
 *                type: string
 *              model_number:
 *                type: string
 *              specifications:
 *                type: string
 *    responses:
 *      '201':
 *        description: Product created successfully
 *      '400':
 *        description: Bad request (Validation error)
 *      '500':
 *        description: Internal server error
 *  put:
 *    summary: Update a product
 *    tags:
 *      - Products
 *    description: Update a product
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the product to update
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              model_name:
 *                type: string
 *              model_number:
 *                type: string
 *              specifications:
 *                type: string
 *    responses:
 *      '200':
 *        description: Product updated successfully
 *      '404':
 *        description: Product not found
 *      '500':
 *        description: Internal server error
 *  delete:
 *    summary: Delete a product
 *    tags:
 *      - Products
 *    description: Delete a product
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the product to delete
 *    responses:
 *      '200':
 *        description: Product deleted successfully
 *      '404':
 *        description: Product not found
 *      '500':
 *        description: Internal server error
 *
 */
