require("dotenv").config();
const express = require('express');
const cors = require("cors");
const path = require('path');
const CONSTANTS = require("./config/contstant");
const routes = require("./routes/v1") ?? [];
const app = express();
const connectMongodb = require("./db/connect")
app.use(cors({ origin: CONSTANTS.CORS_ALLOW }));
app.use(express.static(`${path.resolve()}/public`))
//resiter all routes
for (let r = 0; r < routes.length; r++) {
    const routeConf = routes[r];
    app.use(routeConf?.path, routeConf?.routes)
};
app.listen(CONSTANTS.PORT, async () => {
    await connectMongodb()
    console.log(`Server running at port:-${CONSTANTS.PORT}`);
})

