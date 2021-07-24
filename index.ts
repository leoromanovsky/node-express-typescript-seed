import express from 'express';
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: __dirname+'/.env' });

const app = express();
const PORT = process.env.PORT;

const usersRouter = require('./routes/users');
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send('Express + TypeScript Server???')
});

app.use('/users', usersRouter);


app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
