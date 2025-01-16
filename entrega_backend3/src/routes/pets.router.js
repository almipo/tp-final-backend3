import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();

/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtener todas las mascotas
 *     description: Devuelve una lista de todas las mascotas registradas.
 *     responses:
 *       200:
 *         description: Lista de mascotas
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
router.get('/', petsController.getAllPets);

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Crear una nueva mascota
 *     description: Crea un nuevo registro de mascota.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               species:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mascota creada con éxito
 */
router.post('/', petsController.createPet);

/**
 * @swagger
 * /api/pets/withimage:
 *   post:
 *     summary: Crear una mascota con imagen
 *     description: Crea una nueva mascota y sube una imagen de la mascota.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               species:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Mascota con imagen creada con éxito
 */
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);

/**
 * @swagger
 * /api/pets/{pid}:
 *   put:
 *     summary: Actualizar información de una mascota
 *     description: Actualiza la información de una mascota según el ID proporcionado.
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: ID de la mascota.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               species:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mascota actualizada correctamente
 */
router.put('/:pid', petsController.updatePet);

/**
 * @swagger
 * /api/pets/{pid}:
 *   delete:
 *     summary: Eliminar una mascota
 *     description: Elimina una mascota según el ID proporcionado.
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: ID de la mascota.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mascota eliminada correctamente
 */
router.delete('/:pid', petsController.deletePet);

export default router;
