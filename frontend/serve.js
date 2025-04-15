import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5912;

// Serve static files from the build directory
app.use(express.static(`${path?.resolve()}/dist`));

// Serve index.html for all routes (for SPAs)
app.get('*', (req, res) => {
    res.sendFile(`${path?.resolve()}/dist/index.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
