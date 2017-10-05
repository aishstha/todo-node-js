import { Router } from 'express';

import * as todos from '../services/todos';
import { checkExists } from '../middlewares/checkExist'

let router = Router();

router.get('/', (req, res, next) => {
    todos.getAllTodos().then(row => res.json
        ({
            "data": row
        })
    ).catch(err => next(err));
});

router.get('/:id',checkExists, (req, res, next) => {
    var id = req.params.id;

    todos.getTodoById(id).then(row => res.json
        ({
            "data": row
        })
    ).catch(err => next(err));
});

router.post('/', (req, res, next) => {
    todos.postAllTodos(req.body.title, req.body.description, req.body.iscomplete).then(row => res.json({
        "success": true,
        "data": row
    })
    ).catch(err => next(err));
});

router.delete('/:id', checkExists, (req, res, next) => {
    var id = req.params.id;
    todos.deleteTodoById(id).then(row => res.json({
        "success": true,
        "data": row
    })
    ).catch(err => next(err));
});

router.put('/:id',checkExists, (req, res, next) => {
    var id = req.params.id;

    todos.putTodoById(id, req.body.title, req.body.description, req.body.iscomplete).then(row => res.json
        ({
            "success": true,
            "data": row
        })
    ).catch(err => next(err));
});

export default router;