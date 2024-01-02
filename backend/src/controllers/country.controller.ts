// src/controllers/country.controller.ts
import { Request, Response } from "express";
import CountryRepository from "../repository/country.repository";
import { percentageFromTotalPoblation } from "../utils/country.utils";

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: Operaciones relacionadas con países
 */

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
export const searchCountriesByName = async (req: Request, res: Response) => {
  try {
    const name = req.query.name?.toString() || "";
    const countries = await CountryRepository.searchCountriesByName(name);
    if (countries.length === 0)
      return res.status(404).send("No se encontraron países con ese nombre");

    const total_poblation = await CountryRepository.getTotalPoblation();
    const countriesWithPercentage = percentageFromTotalPoblation(countries, total_poblation);
    res.json({ data: countriesWithPercentage, status: 200 });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error interno del servidor");
  }
};
