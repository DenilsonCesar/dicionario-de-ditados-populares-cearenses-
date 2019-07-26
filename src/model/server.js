const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: false}));

const con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'dicionario'
});

const server = app.listen(4545, ()=>{
    const host = server.address().address
    const port = server.address().port
    console.log('hello');
});

con.connect((error)=>{
    if(error) console.log(error);
    else console.log('conectado!');
});

app.get('/dic/:id', (req, res) => {
    console.log(req.params.id);
    con.query('SELECT * FROM dic WHERE titulo = ?', req.params.id, (error, rows) => {
        if(!!error) console.log('error');
        else{
            console.log(rows);
            res.send(JSON.stringify(rows)); 
        }
    })
});
