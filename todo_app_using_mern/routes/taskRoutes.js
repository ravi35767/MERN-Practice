const { Router } =  require('express');

const {addTask, updateTask, getTasks, deleteTask} = require('../controllers/taskController');

const router = Router();

router.get('/', getTasks);
router.post('/addTask', addTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);

module.exports = router;