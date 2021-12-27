const express = require('express');
const htmlRoutes = require('./routes/html')
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(htmlRoutes)
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });

  