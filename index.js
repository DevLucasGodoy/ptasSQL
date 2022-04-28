var { usuario } = require("./models");
var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
var mostrar = await usuario.findAll();
  res.json(mostrar);
});

app.post("/", async function(req, res){
  var mostrar = await usuario.create(req.body);
  res.json(mostrar);
});

app.listen(3000, function(){
  console.log("servidor meteu essa mane");
});
