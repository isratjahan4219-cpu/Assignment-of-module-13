const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(express.json());   // This line is REQUIRED

app.use("/", apiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});