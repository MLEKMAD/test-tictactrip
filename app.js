const express = require('express');
const parser = require('body-parser');

const app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(parser.text());


app.get('/api', (req, res) => {
    res.json({
        message: "How's it going"
    });
});
app.listen(3000, () => console.log('Server started on port 3000'));