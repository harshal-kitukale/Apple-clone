const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { authentication } = require("./Middleware/authentication.middleware");
const { connection } = require("./db");
const { userRouter } = require("./routes/User.routes");
const { cartRouter } = require("./routes/Cart.routes");
const { productRouter } = require("./routes/Product.routes");
const { adminRouter } = require("./routes/Admin.routes");

app.use(express.json());
app.use(cors());

// Admin routes
app.use("/admin", adminRouter);

// user (Login, registration) Routes
app.use("/user", userRouter);

// product Routes
app.use("/product", productRouter);

// Cart Routes + middleware
// app.use(authentication);
app.use("/cart", cartRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`${process.env.PORT} is running smoothly`);
  } catch (err) {
    console.log("There is some error in the field");
  }
});
