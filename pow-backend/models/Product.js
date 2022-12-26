const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    pizzaType: {
      type: Array,
      default: ["Margherita", "Pepperoni", "Veggie", "Italiano"],
    },
    drinkType: { type: Array, default: ["Ayran", "Lipton Ice Tea", "Pepsi"] },
    sideFoodType: {
      type: Array,
      default: [
        "Gurme Patates (100 gr.)",
        "10'lu Çıtır Tavuk",
        "5'li Soğan Halkası",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
