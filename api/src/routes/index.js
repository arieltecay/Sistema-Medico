const { Router } = require("express");
// import all routers;
const router = Router();
const userRouter = require("./users.js");

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use("/users", userRouter);

module.exports = router;