import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ name: "proffy-api", status: "up" });
});

app.listen(3333);
