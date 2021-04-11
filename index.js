const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hey this is sulabh adhikari. docker and kubernates are really great"
  );
});
app.listen(8080, () => {
  console.log("listening to the port 8080");
});
