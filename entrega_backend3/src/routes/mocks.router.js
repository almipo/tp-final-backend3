import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";

const router = Router();

/**
 * @swagger
 * /api/mocks/mockingUsers:
 *   get:
 *     summary: Obtener usuarios simulados
 *     description: Devuelve un conjunto simulado de usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios simulados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get("/mockingUsers", mocksController.getUsuarios);

/**
 * @swagger
 * /api/mocks/mockingPets:
 *   get:
 *     summary: Obtener mascotas simuladas
 *     description: Devuelve un conjunto simulado de mascotas.
 *     responses:
 *       200:
 *         description: Lista de mascotas simuladas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   species:
 *                     type: string
 */
router.get("/mockingPets", mocksController.getMascotas);

/**
 * @swagger
 * /api/mocks/users:
 *   get:
 *     summary: Obtener usuarios desde la base de datos
 *     description: Recupera los usuarios de la base de datos.
 *     responses:
 *       200:
 *         description: Lista de usuarios desde la base de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 */
router.get("/users", mocksController.getUsersFromDB);

/**
 * @swagger
 * /api/mocks/pets:
 *   get:
 *     summary: Obtener mascotas desde la base de datos
 *     description: Recupera las mascotas de la base de datos.
 *     responses:
 *       200:
 *         description: Lista de mascotas desde la base de datos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   species:
 *                     type: string
 */
router.get("/pets", mocksController.getPetsFromDB);

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Generar datos en la base de datos
 *     description: Genera datos de prueba en la base de datos para usuarios y mascotas.
 *     responses:
 *       201:
 *         description: Datos generados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Datos generados con éxito"
 */
router.post("/generateData", mocksController.generateData);

export default router;
