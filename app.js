const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {justify} = require('./justify');

const SECRET_KEY = process.env.SECRET_KEY;


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());


app.get('/api', (req, res) => {
    res.json({
        message: "How's it going"
    });
});
app.post('/api/justify', verifyToken,  (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err, data) => {
        if(err){
            res.sendStatus(403);
        }
        else {
            res.set('Content-Type', 'text/plain')
            res.send(justify(req.body));
        }
    })
    
})

app.post('/api/token', (req, res) => {
    // Mock user
    const user = {
        email: 'foo@bar.fr',
        dailyWords: 80000
    } 
    jwt.sign({user}, SECRET_KEY, (err, token) => {
        res.json({token});
    })
})

// middleware to verify the token duh
function verifyToken(req, res, next){
    // getting header
    const bearerHeader = req.headers['authorization']
    if (bearerHeader) {
        //getting the token
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    }   
    else {
        res.sendStatus(403);
    }
}

app.listen(3000, () => console.log('Server started on port 3000'));