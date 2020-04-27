// Dependencies
require('dotenv').config();       // to use .env file
const app = require ('./app') // call app'

// Sets up the Express App
const PORT = process.env.PORT || 3000;






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });