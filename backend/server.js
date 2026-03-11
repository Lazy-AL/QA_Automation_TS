const express = require('express');
const app = express();

app.use(express.json());
let orders = {};
let idCounter = 1;

// health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// create order
app.post('/orders', (req, res) => {
    const id = idCounter++;

    orders[id] = {
        id,
        status: 'PROCESSING'
    };

    // simulate async backend work
    const delay = Math.floor(Math.random() * 4000) + 1000;

    setTimeout(() => {
        orders[id].status = 'READY';
    }, delay);

    res.json({ id, status: 'PROCESSING' });
});

// get order
app.get('/orders/:id', (req, res) => {
    const order = orders[req.params.id];

    if (!order) {
        return res.status(404).json({ error: 'Not found' });
    }

    res.json(order);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
