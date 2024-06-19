const router = require("express").Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: Register Admin details
 *    description: Register Admin details
 *    tags:
 *        - Authentication
 *    responses:
 *        '201':
 *            description: User created successfully
 *        '400':
 *            description: Bad request (Validation error)
 *        '500':
 *            description: Internal server error
 *    requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        username:
 *                            type: string
 *                        email:
 *                            type: string
 *                        password:
 *                            type: string
 *        description: Create Admin
 *
 *
 * /api/auth/login:
 *  post:
 *    summary: Login Admin
 *    description: Login Admin details
 *    tags:
 *        - Authentication
 *    responses:
 *        '200':
 *            description: Login successful
 *        '400':
 *            description: Bad request
 *        '500':
 *            description: Internal server error
 *    requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        email:
 *                            type: string
 *                        password:
 *                            type: string
 *        description: Login Admin
 *
 *
 */

router.post("/login", authController.login);

router.post("/register", authController.register);

module.exports = router;
