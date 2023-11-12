const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use (express.json());
app.use (express.urlencoded({ extended: true}));

require("dotenv").config();



require("./config/mongoose.config");
require("./routes/image.routes")(app);

const PORT = process.env.PORT


app.listen(PORT, () => {console.log(`>>>>>>>>>>>Listening on port: ${PORT}`)})