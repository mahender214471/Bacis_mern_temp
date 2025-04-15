const authRoutes = require("./auth.routes");


module.exports = [
    {
        path: "/auth",
        routes: authRoutes
    }
]