const express = require('express');


const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Server is up and running");
})

const products = [];

app.get('/products', (req, res) => {
    res.status(200).json({
        message: "All Products",
        data: products
    })
})

app.post('/products', (req, res) => {
    const newProduct = {
        product: req.body.product,
        price: req.body.price
    }
    products.push(newProduct);
    res.status(201).json({
        message: "Product Created",
        data: newProduct
    })
})

app.delete('/products/:id', (req, res) => {
    const index = req.params.id;
    console.log(index)
    products.splice(index, 1);
    res.status(200).json({
        message: `Product with id ${req.params.id} deleted`
    })
})

module.exports = app;