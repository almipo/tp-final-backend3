import { Router } from 'express';
import adoptionsController from '../controllers/adoptions.controller.js';

const router = Router();

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Obtener todas las adopciones
 *     description: Obtiene una lista de todas las adopciones registradas en el sistema.
 *     responses:
 *       200:
 *         description: Lista de adopciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   aid:
 *                     type: string
 *                   uid:
 *                     type: string
 *                   pid:
 *                     type: string
 *                   adoptionDate:
 *                     type: string
 *                   status:
 *                     type: string
 */
router.get('/', adoptionsController.getAllAdoptions);

/**
 * @swagger
 * /api/adoptions/{aid}:
 *   get:
 *     summary: Obtener detalles de una adopción
 *     description: Obtiene la información detallada de una adopción específica.
 *     parameters:
 *       - in: path
 *         name: aid
 *         required: true
 *         description: ID de la adopción.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles de la adopción
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 aid:
 *                   type: string
 *                 uid:
 *                   type: string
 *                 pid:
 *                   type: string
 *                 adoptionDate:
 *                   type: string
 *                 status:
 *                   type: string
 */
router.get('/:aid', adoptionsController.getAdoption);

/**
 * @swagger
 * /api/adoptions/{uid}/{pid}:
 *   post:
 *     summary: Crear una nueva adopción
 *     description: Crea un nuevo registro de adopción basado en el ID de usuario y el ID de la mascota.
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: ID del usuario que adopta.
 *         schema:
 *           type: string
 *       - in: path
 *         name: pid
 *         required: true
 *         description: ID de la mascota adoptada.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Adopción creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 aid:
 *                   type: string
 *                 uid:
 *                   type: string
 *                 pid:
 *                   type: string
 *                 adoptionDate:
 *                   type: string
 *                 status:
 *                   type: string
 */
router.post('/:uid/:pid', adoptionsController.createAdoption);

export default router;
