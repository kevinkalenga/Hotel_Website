import express from "express"

const app = express();

const port = 8000

app.get('/api/:message', (req, res) => {
    res.status(200).send(req.params.message)
});

app.listen(port, () => console.log(`Server is running on port ${port}`))