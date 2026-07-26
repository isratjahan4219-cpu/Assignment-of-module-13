const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(express.json());  

app.use("/", apiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
