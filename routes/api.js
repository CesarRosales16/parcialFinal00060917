var express = require('express');
var router = express.Router();
const automovilController = require('../controllers/automovilController'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
router.get('/Automoviles', automovilController.index);
router.get('/Automoviles/:id', automovilController.findAutomovil);
router.post('/Automoviles',automovilController.store);
router.put('/Automoviles/:id',automovilController.update);
router.delete('/Automoviles/:id',automovilController.delete);
module.exports = router;