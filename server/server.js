import express from 'express';

const app = express();
const PORT = 3000;


app.get('/test', async (_req, res) => {
    try {
        res.json("Hello World!");
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Error, /test not reached!");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});