const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const rootRouter = require('./routes/index.js');


app.use(cors());
app.use(express.json());
app.use('/', rootRouter);


app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})