const Automovil = require('../models/automovil');
const automovilController = {};

automovilController.index = async function (req, res, next) {
    let automoviles = await Automovil.find();
    return res.status(200).json(automoviles);
}

automovilController.findAutomovil = async function (req, res, next) {
    let { id } = req.params;
    let automovil = await Automovil.findById(id).catch(err => {
        return next(res);
    });
    return res.status(200).json(automovil);
}

automovilController.store = async function (req, res, next) {
    let automovil = new Automovil();
    automovil.modelo = req.body.modelo;
    automovil.marca = req.body.marca;
    automovil.placa = req.body.placa;
    try {
        await automovil.save();
        return res.status(200).json({ "message": 'Se añadio con exito' });
    }
    catch (err) {
        return res.status(500).json({ err: err, message: 'No se añadio, revise' });
    }
}

automovilController.update = async function (req, res, next) {
    let { id } = req.params;
    let automovil = {
        modelo = req.body.modelo,
        marca = req.body.marca,
        placa = req.body.placa,
    };
    //console.log(automovil);
    try {
        await Automovil.update({_id:id},automovil)
        return res.status(200).json({ "message": 'Se actualizo con exito' });
    }
    catch (err) {
        return res.status(500).json({ err: err, message: 'No se actualizo, revise' });
    }
}

automovilController.delete = async function(req, res, next) {
    let {id} = req.params;
    await Automovil.remove({_id:id});
    return res.status(200).json({ "message": 'Se elimino con exito' });
}

module.exports = automovilController;