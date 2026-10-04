import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
    return res.json({ message: "after adding workflow" });
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
