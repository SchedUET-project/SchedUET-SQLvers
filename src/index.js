import express from "express";
import dotenv from "dotenv";

//import middlewares
import errHandler from "../middleware/error-handler.js";

//import routers
import router from "../routes/api/postRoutes.js";
import accountRouter from "../routes/api/accountsRoutes.js";
import courseRouter from "../routes/api/coursesRoutes.js";
import materialRouter from "../routes/api/materialsRoutes.js";
import registerRouter from "../routes/api/registrationsRoutes.js";
import scheduleRouter from "../routes/api/schedulesRoutes.js";
import sectionRouter from "../routes/api/sectionsRoutes.js";
import teacherRouter from "../routes/api/teachersRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

//middleware
app.use(express.json());
app.use("/public", express.static("./public"));

//use routers
app.use("/posts", router); //localhost:8000/posts
app.use("/accounts", accountRouter);
app.use("/courses", courseRouter);
app.use("/materials", materialRouter);
app.use("/registrations", registerRouter);
app.use("/schedules", scheduleRouter);
app.use("/sections", sectionRouter);
app.use("/teachers", teacherRouter);

//Error Handler
app.use(errHandler.globalErrorHandler);


app.get("/", (req, res) => {
  res.send("trang chủ")
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
