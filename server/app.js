const express = require('express');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const md5 = require('md5');

const app = express();
const port = 3003;

app.use(cors());

// app.use(cookieParser());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());



// app.post('/cookie', (req, res) => {

//     if (req.body.delete) {
//         res.cookie('cookieMonster', '', { maxAge: -3600 });
//     } else {
//         res.cookie('cookieMonster', req.body.text, { maxAge: 3600 });
//     }

//     res.json({ msg: 'OK' });
// });


// app.post('/login', (req, res) => {
//     const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
//     const name = req.body.name;
//     const psw = md5(req.body.psw);

//     const user = users.find(u => u.name === name && u.psw === psw);
//     if (user) {
//         const sessionId = md5(uuidv4()); // Turi buti normali kroptografija!!!
//         user.session = sessionId;

//         fs.writeFileSync('./data/users.json', JSON.stringify(users), 'utf8');
//         res.cookie('magicNumberSession', sessionId);
//         res.json({
//             status: 'ok',
//             name: user.name
//         });
//     } else {
//         res.json({
//             status: 'error',
//         });
//     }
// });

// app.get('/login', (req, res) => {
//     const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
//     const user = req.cookies.magicNumberSession ?
//         users.find(u => u.session === req.cookies.magicNumberSession) :
//         null;

//     if (user) {
//         res.json({
//             status: 'ok',
//             name: user.name
//         });
//     } else {
//         res.json({
//             status: 'error',
//         });
//     }


// });


// API
app.get('/accounts', (req, res) => {
    let allData = fs.readFileSync('./data/accounts.json', 'utf8');
    allData = JSON.parse(allData);
    res.json(allData);
});

app.post('/accounts', (req, res) => {
    let allData = fs.readFileSync('./data/accounts.json', 'utf8');
    allData = JSON.parse(allData);
    const id = uuidv4();
    const data = {
        name: req.body.name,
        surname: req.body.surname,
        amount: req.body.amount,
        id
    };
    allData.push(data);
    allData = JSON.stringify(allData);
    fs.writeFileSync('./data/accounts.json', allData, 'utf8');
    res.json({
        message: { text: 'New account is created', 'type': 'success' }
    });
});

app.delete('/accounts/:id', (req, res) => {
    let allData = fs.readFileSync('./data/accounts.json', 'utf8');
    allData = JSON.parse(allData);
    let deletedData = allData.filter(d => req.params.id !== d.id);
    deletedData = JSON.stringify(deletedData);
    fs.writeFileSync('./data/accounts.json', deletedData, 'utf8');
    res.json({ message: { text: 'The account was deleted', 'type': 'danger' } });
});


app.put('/accounts/:action/:id', (req, res) => {
    let allData = fs.readFileSync('./data/accounts.json', 'utf8');
    allData = JSON.parse(allData);
    let editedData;
    if (req.params.action === 'add') {
        editedData = allData
            .map(d => req.params.id === d.id ? { ...d, amount: d.amount + req.body.amount } : { ...d });
    } else if (req.params.action === 'rem') {
        editedData = allData
            .map(d => req.params.id === d.id ? { ...d, amount: d.amount - req.body.amount } : { ...d });
    }
    editedData = JSON.stringify(editedData);
    fs.writeFileSync('./data/accounts.json', editedData, 'utf8');

    res.json({ message: { text: 'Account was edited', 'type': 'info' } });
});

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});