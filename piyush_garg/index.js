const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

// Routes
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});

// REST API
app.get('/api/users', (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
  })
  .patch((req, res) => {
  // TODO: Edit the user with id
  return res.json({status: "pending"});
  })  
  .delete((req, res) => {
  // TODO: Delete the user with id
  return res.json({status: "pending"});
  })

app.post("/api/users", (req,res) => {
  // TODO: Create new user
  return res.json({status: "pending"});
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});