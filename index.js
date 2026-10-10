const express = require('express');
const db = require('./utils/db-connection');
const cors = require('cors');

const playerRouter = require('./routes/playerRoutes');

const app = express();

app.use(express.json())
app.use(cors());

app.use('/players',playerRouter);


db.sync().then(() => {
    app.listen(3000,() => {
    console.log("server is running ")
})
}).catch((err) => {
    console.log(err);
})

