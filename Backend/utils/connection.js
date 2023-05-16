const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/linkedinassignment")
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("not connected ", err);
  });
