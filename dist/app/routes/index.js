"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const ride_route_1 = require("../modules/ride/ride.route");
// import { StatsRoutes } from "../modules/stats/";
// import { SOSRoutes } from "../modules/SOS/sos.route";
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/ride",
        route: ride_route_1.RideRoutes,
    },
    // {
    //   path: "/stats",
    //   route: StatsRoutes,
    // },
    // {
    //   path: "/sos",
    //   route: SOSRoutes,
    // },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
