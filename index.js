import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("السيرفر شغال ✅");
});

app.post("/endpoint", (req, res) => {
  res.json({
    success: true,
    data: req.body
  });
});

app.listen(process.env.PORT || 3000);
