// bot.js

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Kick Bot is running ✅");
});

app.post("/send-message", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  console.log("✅ Received message:", message);

  // هنا ستضع كود الإرسال الفعلي إلى Kick (سنضيفه لاحقًا)
  res.json({ status: "sent", message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Bot started on port ${PORT}`);
});