const mongoose = require('mongoose');

// ===== Connection to Database =====
const connectDatabase = () => {

mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection
db.on('connected', () => {
  console.log("==================================")
  console.log(`connected to ${db.name} at ${db.host} : on  ${db.port} successfully`);
});

}
module.exports = connectDatabase


