const app = require('./src/app');

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});