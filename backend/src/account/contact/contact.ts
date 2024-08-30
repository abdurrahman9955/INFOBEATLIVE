import express, { Request, Response } from 'express';
import { PrismaClient} from '@prisma/client';

const routerContacts = express.Router();
const prisma = new PrismaClient();

interface ContactRequest {
  name: string;
  email: string;
  reason: string;
  statement: string;
}

interface ResponseMessage {
  message: string;
}

const createContact = async (req: Request<{}, {}, ContactRequest>, res: Response<ResponseMessage | { error: string }>): Promise<Response> => {
  try {
    const { name, email, reason, statement } = req.body;

     await prisma.contact.create({
      data: {
        name,
        email,
        reason,
        statement,
      },
    });

    return res.status(201).json({ message: 'Contact submitted successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getContacts = async (req: Request, res: Response< | { error: string }>): Promise<Response> => {
  try {
    const contacts = await prisma.contact.findMany();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteContact = async (req: Request<{ contactId: string }>, res: Response<ResponseMessage | { error: string }>): Promise<Response> => {
  try {
    const contactId = parseInt(req.params.contactId, 10);

    await prisma.contact.delete({
      where: {
        id: contactId,
      },
    });

    return res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Route definitions
routerContacts.post('/contacts', createContact);
routerContacts.get('/contacts', getContacts);
routerContacts.delete('/:contactId', deleteContact);

export default routerContacts;
