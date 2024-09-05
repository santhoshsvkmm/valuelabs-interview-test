const express = require('express');
const { query, validationResult } = require('express-validator');

const app = express();

app.get('/', 
  query('a').isNumeric().withMessage('Parameter a must be a number'),
  query('b').isNumeric().withMessage('Parameter b must be a number'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const c = a + b;

    res.send(`${c}`);
  }
);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});