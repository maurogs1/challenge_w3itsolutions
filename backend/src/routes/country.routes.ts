// src/routes/country.routes.ts
import express from 'express';
import { searchCountriesByName } from '../controllers/country.controller';
import { validateSearchParams } from '../validators/country.validator';

const router = express.Router();

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: Buscar países por nombre
 *     tags: [Countries]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Nombre del país a buscar
 *     responses:
 *       200:
 *         description: Éxito. Devuelve la lista de países con su porcentaje de población.
 *         content:
 *           application/json:
 *             example:
 *               data: [{"name":"India","percentage":"25.765616373743633","population":1409902000}]
 *               status: 200
 *       204:
 *        description: No se puede realizar la búsqueda sin un nombre o con menos de 3 caracteres.*        
 *       404:
 *         description: No se encontraron países con ese nombre.
 *         content:
 *           text/plain:
 *             example: No se encontraron países con ese nombre
 */
router.get('/', validateSearchParams, searchCountriesByName);

export default router;
