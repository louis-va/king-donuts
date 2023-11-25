import express from 'express'
import ViteExpress from 'vite-express'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on: http://localhost:3000")
);

// GET /api/menu
app.get('/api/menu', async (req, res) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)

    const menuItemSchema = new mongoose.Schema({
      title: String,
      description: String,
      image: String,
      price: Number,
      tags: { content: String, color: String },
      points_earned: Number
    })

    const menuItemModel = mongoose.model('menu_items', menuItemSchema)

    const menuItems = await menuItemModel.find()

    return res.status(200).json({
      status: "success",
      menuItems: menuItems,
      message: "Data retrieved successfully"
    });
  } catch (error) {
    return res.status(500).json({
      status: "error", 
      message: error
    });
  }
})