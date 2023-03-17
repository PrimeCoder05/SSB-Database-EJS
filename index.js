const express = require("express");
const app = express();
const path = require("path");
const connectToMongoDB = require("./database/mongodb");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


const characterRouter = require("./routes/api/ssbcRouter");
app.use("/api", characterRouter);

const viewRouter = require("./routes/viewRouters/viewRouter");
app.use("/", viewRouter);


const PORT = 3001;

app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}`);

	connectToMongoDB();
});