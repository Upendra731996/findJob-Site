const express = require("express");
const bodyParser = require("body-Parser");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();
app.use(bodyParser.json());
mongoose.set('strictQuery', true);
mongoose
  .connect(
    "mongodb+srv://upendra:wvUNUF1FjJ02PCPH@cluster0.b8yrh4n.mongodb.net/upendra123?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error.message));

app.use("/", route);
app.listen(3000, () => {
  console.log("express app is connected at port:" + 3000);
});
