require("./utils/connection");
const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");

// assuming the file is named "router.js"

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("app started on port 3000");
});
