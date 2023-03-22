const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const connectToMongoDB = require("./database/mongodb");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const characterRouter = require("./routes/api/ssbcRouter");
app.use("/api", characterRouter);

const viewRouter = require("./routes/viewRouters/viewRouter");
app.use("/", viewRouter);


const PORT = 3001;

app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);

	connectToMongoDB();
});