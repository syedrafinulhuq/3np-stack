const express = require("express");
const app = express();

app.use(express.json()); // to read JSON bodies

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express 👋" });
});

app.get("/status", (req, res) => {
  res.json({ ok: true, service: "Express API", version: "1.0.0" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    message: "Login request received",
    email,
  });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
