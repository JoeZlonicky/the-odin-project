import express from 'express';
import usersRouter from './routes/usersRouter.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app available at http://localhost:${PORT}`));
