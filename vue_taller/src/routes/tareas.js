const express = require('express');
const router = express.Router();

 const Tarea = require('../models/tarea');


router.get('/',async (req, res) => {
        const tareas = await Tarea.find();

});

router.post('/',async (req,res) => {
    const tarea = new Tarea(req.body);
    await tarea.save();

});
router.put('/:id',async (req, res) => {
    await Tarea.findByIdAndUpdate(req.params , res.body);

});
router.delete('/:id ',async (req, res) => {
    await Tarea.findByIdAndREmove(req.params.id);
});

module.exports =router;