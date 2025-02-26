require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const db = process.env.MONGODB_URI.replace(
  '<PASSWORD>',
  process.env.MONGODB_PASSWORD
);

mongoose.connect(db).then(() => {
  // eslint-disable-next-line no-console
  console.log('DB connection successful!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}...`);
});
