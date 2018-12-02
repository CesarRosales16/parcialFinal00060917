var express = require('express');
var router = express.Router();

//const automovilController = require('../controllers/automovilController'); 

/* GET users listing. */
/*router.get('/Automoviles', automovilController.index);
router.get('/Automoviles/:id', automovilController.findAutomovil);
router.post('/Automoviles/',automovilController.store);
router.put('/Automoviles/:id',automovilController.update);
router.delete('/Automoviles/:id',automovilController.delete);*/
const automovilController = require('../controllers/automovilController'); 

/* GET users listing. */
router.get('/', automovilController.index);
router.get('/:id', automovilController.findAutomovil);
router.post('/',automovilController.store);
router.put('/:id',automovilController.update);
router.delete('/:id',automovilController.delete);
module.exports = router;
