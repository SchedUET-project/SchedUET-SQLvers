import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//import middlewares
import errHandler from "../middleware/error-handler.js";
import authenticateMiddleware from "../middleware/authenticate.js";
import notFoundMiddleware from "../middleware/notfound.js";
import requestSuccessMiddleware from "../middleware/requestSuccess.js";

//import routers
import accountRouter from "../routes/api/accountsRoutes.js";
import courseRouter from "../routes/api/coursesRoutes.js";
import materialRouter from "../routes/api/materialsRoutes.js";
import registerRouter from "../routes/api/registrationsRoutes.js";
import scheduleRouter from "../routes/api/schedulesRoutes.js";
import sectionRouter from "../routes/api/sectionsRoutes.js";
import teacherRouter from "../routes/api/teachersRoutes.js";
import loginRouter from "../routes/api/loginRoutes.js";
import checkAuthRouter from "../routes/api/checkAuthRoute.js";
import logoutRouter from "../routes/api/logoutRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//parser middleware
app.use(cors({
  origin: 'http://localhost:8001'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use login route
app.use("/login", loginRouter);

//check auth (this is for client's usage)
app.use("/checkAuth", checkAuthRouter);
app.use(authenticateMiddleware);

//use routers
app.use("/accounts", accountRouter, requestSuccessMiddleware);
app.use("/courses", courseRouter, requestSuccessMiddleware);
app.use("/materials", materialRouter, requestSuccessMiddleware);
app.use("/registrations", registerRouter, requestSuccessMiddleware);
app.use("/schedules", scheduleRouter, requestSuccessMiddleware);
app.use("/sections", sectionRouter, requestSuccessMiddleware);
app.use("/teachers", teacherRouter, requestSuccessMiddleware);

//Logout route
app.use("/logout", logoutRouter);
//Handle page not found
app.use(notFoundMiddleware);
//Error Handler
app.use(errHandler.globalErrorHandler);

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
