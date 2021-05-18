const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("try this");
});

const port = 8081;
app.listen(port, () => {
    console.log("Wazzappppp");
});
