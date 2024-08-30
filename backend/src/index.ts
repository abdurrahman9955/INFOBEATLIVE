import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3500;

app.get('/', (req: Request, res: Response) => {
  res.send('hello infobeatlive backend');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
