const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("try this");
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(port);
});
