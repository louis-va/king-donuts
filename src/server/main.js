const express = require("express");
const ViteExpress = require("vite-express");

const app = express();

app.get("/menu-items/", (req, res) => {
  res.send("Ramen, Spaghetti, Fries");
});

// Endpoint: get historical corn price
app.get('/api/menu-items/', async (req, res) => {
  return res.status(200).json({
    status: "success",
    data: { menuItems: ["Ramen", "Spaghetti", "Fries", "Sushi"] },
    message: "Data retrieved successfully"
  })
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on: http://localhost:3000...")
);
