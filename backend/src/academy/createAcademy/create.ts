import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new Academy
export const createAcademy = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, purpose, country, language, rules, description, icon, creatorId } = req.body;
    const academy = await prisma.academy.create({
      data: {
        name,
        purpose,
        country,
        language,
        rules,
        description,
        icon,
        creatorId,
      },
    });
    res.status(201).json(academy);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create academy' });
  }
};

// Get all Academy
export const getAllAcademies = async (req: Request, res: Response): Promise<void> => {
  try {
    const academy = await prisma.academy.findMany();
    res.status(200).json(academy);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Academy' });
  }
};

// Get a single Academy by ID
export const getAcademyById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const academy = await prisma.academy.findUnique({
      where: { id },
    });
    if (!academy) {
      res.status(404).json({ error: 'Academy not found' });
      return;
    }
    res.status(200).json(academy);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch academy' });
  }
};

// Update a Academy
export const updateAcademy = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, purpose, country, language, rules, description, icon } = req.body;
    const academy = await prisma.academy.update({
      where: { id },
      data: {
        name,
        purpose,
        country,
        language,
        rules,
        description,
        icon,
      },
    });
    res.status(200).json(academy);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update academy' });
  }
};

// Delete a Academy
export const deleteAcademy = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.academy.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete academy' });
  }
};
