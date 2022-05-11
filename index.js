var { usuario } = require("./models");
var { empresa } = require("./models");
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

app.get("/usuarios/:id", async function(req, res) {
 const id = await usuario.findByPk(req.params.id);
 res.json(id)
});

app.post("/usuarios", async function(req, res){
  var mostrar = await usuario.create(req.body);
  res.json(mostrar);
});

app.put("/usuarios/:id", async function(req, res){
  var resultado = usuario.update(req.body,{ where: { id: req.params.id }});
  res.json(resultado);
});

app.delete("/usuarios", async function(req, res){
  usuario.destroy({ where: { id: 1 }});
});

///////////////////////////////////////////////////////////////////////////

app.get("/empresas", async function(req, res){
var mostrar = await empresa.findAll();
  res.json(mostrar);
});

app.get("/empresas/:id", async function(req, res) {
 const id = await empresa.findByPk(req.params.id);
 res.json(id)
});

app.post("/empresas", async function(req, res){
  var mostrar = await usuario.create(req.body);
  res.json(mostrar);
});

app.put("/empresas/:id", async function(req, res){
  var resultado = empresa.update(req.body,{ where: { id: req.params.id }});
  res.json(resultado);
});

app.delete("/empresas", async function(req, res){
  empresa.destroy({ where: { id: 1 }});
});

app.listen(3000, function(){
  console.log("servidor meteu essa mane");
});
        