const express = require("express");
const app = express();
const PORT = 4000;
const productRoutes = require("./routes");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://alsendrha:alsdud1@cluster0.wyz6a4i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

// app.listen(PORT, () => {
//   console.log("listening on port " + PORT);
// });

module.exports = app;
