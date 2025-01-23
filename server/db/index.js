const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/DNSAPP')
  .then(() => {
    console.log('DB Connected');
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
