const getTareas = (req,  res) => {
    res.status(200).json({message: 'obtener Tareas'})
}
const createTarea = (req, res) => {
    res.status(201).json({ message:'tareas creada'})
}
const updateTarea = (req, res) => {
    res.status(200).json({ message: `se modifico la tarea ${req.params.id}` })
}
const deleteTarea = (req, res) => {
    res.status(200).json({ message: `se elimino la tarea ${req.params.id}` })
}

module.exports = {
    getTareas,
    createTarea,
    updateTarea,
    deleteTarea
}