import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  
  return res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
});
