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

app.get("/:id", async function(req, res) {
 const id = await usuario.findByPk(req.params.id);
 res.json(id)
});

app.post("/", async function(req, res){
  var mostrar = await usuario.create(req.body);
  res.json(mostrar);
});

app.put("/:id", async function(req, res){
  var resultado = usuario.update(req.body,{ where: { id: req.params.id }});
  res.json(resultado);
});

app.delete("/", async function(req, res){
  usuario.destroy({ where: { id: 1 }});
});

app.listen(3000, function(){
  console.log("servidor meteu essa mane");
});
        