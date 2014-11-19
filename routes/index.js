var express = require('express');
var router = express.Router();

/* GET pagina principal. */
router.get('/', function(req, res) {
  res.render('index');
});

/* POST pagina de contacto. */
router.post('/contacto', function(req, res) {
  // se puede usar tambien req.params; o req.param("nombre");
  console.log(req.body.nombre);
  if(req.body.nombre.length > 1){
  	res.json({ guardado: true });
  }
  else{
  	res.json({ guardado: false });
  }
});

/* GET ejemplo de media quieries. */
router.get('/mediaqueries', function(req, res) {
  res.render('mediaqueries');
});


/* GET ejemplos javascript. */
router.get('/javascript', function(req, res) {
  res.render('javascript');
});

module.exports = router;
