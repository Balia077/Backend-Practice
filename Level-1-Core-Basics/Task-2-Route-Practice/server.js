const app = require('./src/app');

app.get('/', (req, res) => {
    res.send("Server is running");
})

app.get('/about', (req, res) => {
    res.status(200).json({
        message: "This is the about page"
    })
})

app.get('/contact', (req, res) => {
    res.status(200).json({
        message: "This is the contact page"
    })
})

app.get('/api/user', (req, res) => {
    res.status(200).json({
        name: "Balaram",
        role: "Backend Learner"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})