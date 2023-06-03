export default function handler(req, res) {
  res.status(200).json([
    {
      _id: 1,
      name: "V Neck Tie Waist Silk Evening Dress",
      description:
        "Romantic and alluring, the V-Neck Tie-Waist Silk Evening Dress has the perfect amount of elegant details to make you feel confident",
      imageUrl:
        "https://i.ibb.co/XShsJtp/silkeveningdress.png",
      price: "$ 125.00",
    },
    {
      _id: 2,
      name: "The Amalfi Stripe Silk Shirt",
      description:
        "The contrast of classic Navy Blue and Natural White vertical bold stripes brings out the beauty of a vivid and standout look, showing a more premium fashion taste.",
      imageUrl:
        "https://i.ibb.co/Wgn0XBL/amalfisilkshirt.png",
        price: "$ 149.00",

    },
  ]);
}
