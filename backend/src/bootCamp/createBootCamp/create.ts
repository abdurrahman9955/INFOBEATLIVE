import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new Bootcamp
export const createBootcamp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, purpose, country, language, rules, description, icon, creatorId } = req.body;
    const bootcamp = await prisma.bootcamp.create({
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
    res.status(201).json(bootcamp);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create bootcamp' });
  }
};

// Get all Bootcamps
export const getAllBootcamps = async (req: Request, res: Response): Promise<void> => {
  try {
    const bootcamps = await prisma.bootcamp.findMany();
    res.status(200).json(bootcamps);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bootcamps' });
  }
};

// Get a single Bootcamp by ID
export const getBootcampById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const bootcamp = await prisma.bootcamp.findUnique({
      where: { id },
    });
    if (!bootcamp) {
      res.status(404).json({ error: 'Bootcamp not found' });
      return;
    }
    res.status(200).json(bootcamp);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bootcamp' });
  }
};

// Update a Bootcamp
export const updateBootcamp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, purpose, country, language, rules, description, icon } = req.body;
    const bootcamp = await prisma.bootcamp.update({
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
    res.status(200).json(bootcamp);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update bootcamp' });
  }
};

// Delete a Bootcamp
export const deleteBootcamp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.bootcamp.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete bootcamp' });
  }
};
