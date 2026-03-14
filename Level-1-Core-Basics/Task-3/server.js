const app = require('./src/app');

app.get('/', (req, res) => {
    res.send("Server is up and running");
})

app.get('/products', (req, res) => {
    res.status(200).json({
        message: "All Products"
    })
})

app.post('/products', (req, res) => {
    res.status(201).json({
        message: "Product Created"
    })
})

app.put('/products/:id', (req, res) => {
    res.status(200).json({
        message: `Product with id ${req.params.id} updated`
    })
})

app.delete('/products/:id', (req, res) => {
    res.status(200).json({
        message: `Product with id ${req.params.id} deleted`
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})