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
  	res.render('contacto', { guardado: true });
  }
  else{
  	res.render('contacto', { guardado: false });
  }
});

module.exports = router;
