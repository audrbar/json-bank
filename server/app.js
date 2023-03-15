const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3003;

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

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
    let item = allData.find((item) => item.id === req.params.id)
    if (item.amount === 0) {
        let deletedData = allData.filter(d => req.params.id !== d.id);
        deletedData = JSON.stringify(deletedData);
        fs.writeFileSync('./data/accounts.json', deletedData, 'utf8');
        res.json({ message: { text: 'The account was deleted', 'type': 'danger' } });
    } else {
        res.json({ message: { text: 'The account can not be deleted. Just spend all your money.', 'type': 'danger' } });
    }
});

app.put('/accounts/:action/:id', (req, res) => {
    let allData = fs.readFileSync('./data/accounts.json', 'utf8');
    allData = JSON.parse(allData);
    let editedData;
    if (req.params.action === 'add') {
        editedData = allData
            .map(d => req.params.id === d.id ? { ...d, amount: d.amount + req.body.amount } : { ...d });
        editedData = JSON.stringify(editedData);
        fs.writeFileSync('./data/accounts.json', editedData, 'utf8');

        res.json({ message: { text: 'Congratulations! The account has been replenished.', 'type': 'info' } });
    } else if (req.params.action === 'rem') {
        const item = allData.find(d => req.params.id === d.id);
        const itemAmount = item.amount - req.body.amount;
        if (itemAmount < 0) {
            return res.json({ message: { text: 'What a pity! Account can not be debited. Not enough money!', 'type': 'info' } });
        }
        editedData = allData
            .map(d => req.params.id === d.id && d.amount >= req.body.amount ? { ...d, amount: d.amount - req.body.amount } : { ...d });
        editedData = JSON.stringify(editedData);
        fs.writeFileSync('./data/accounts.json', editedData, 'utf8');

        res.json({ message: { text: 'Everything is OK! The account has been debited.', 'type': 'info' } });
    }
});

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});