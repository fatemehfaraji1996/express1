//Create a /who route that passes a name parameter to the app and prints the name parameter to the screen.
// hint: use req.params

//Answer
const express = require('express');
const app = express();
const port = 3000;
app.get('/who/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
