const app = require("./app");
const { EXPRESS_PORT } = process.env;

//console.log(EXPRESS_PORT);
app.listen(EXPRESS_PORT, () => console.log(`Server is running at port ${EXPRESS_PORT}.`));
