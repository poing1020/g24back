const express = require('express')
const router = express.Router()
const {getTareas, createTarea, updateTarea, deleteTarea} = require('../controllers/tareasControler')

//router.route('/').get(getTareas).post(createTarea) para usar cualquiera de estas dos slineas  se puede comentar las otras
//router.route('/:id').delete(deleteTarea).put(updateTarea) por funcionalidad o calidas se puede escoger 


// obtener tareas
router.get('/', getTareas)

//crear una nueva tarea
router.post('/', createTarea)

//modificar tareas
router.put('/:id', updateTarea)

// tarea eliminada 
router.delete('/:id', deleteTarea)






module.exports= router;


