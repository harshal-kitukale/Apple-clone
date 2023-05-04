const express = require("express");
const app = express.json();
const { connection } = require("./db");
process("dotenv").require();
const { userRouter } = require("./routes/User.routes");
const { auth } = require("./middleware/auth.middleware");

app.use("/user",userRouter)
app.use(auth)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`${process.env.PORT} is running smoothly`);
  } catch (err) {
    console.log("There is some error in the field");
  }
});
