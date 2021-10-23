const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());

const users = [
    { id: 0, name: "Nishat Afifa", age: 21, profession: "Student" },
    { id: 1, name: "Hasanul", age: 22, profession: "Student" },
    { id: 2, name: "Yeadul", age: 22, profession: "Student" },
    { id: 3, name: "Toufick", age: 22, profession: "Student" }
];

app.get('/', (req, res) => {
    res.send("Hello from my second node project. Here I am learning exciting things.");
});

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting the post", req.body);
    res.send(JSON.stringify(newUser));
});

app.listen(port, () => {
    console.log("I am listening from the port of ", port);
})