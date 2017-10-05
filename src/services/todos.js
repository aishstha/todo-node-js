import * as todoDao from '../dao/todo';

export function getAllTodos() {
    return todoDao.fetchAll();
}

export function getTodoById(id) {
    return todoDao.fetchById(id);
}

export function postAllTodos(title,description,iscomplete) {
    return todoDao.insert(title,description,iscomplete);
}

export function deleteTodoById(id) {
    return todoDao.deleteById(id);
}

export function putTodoById(id,title,description,iscomplete){
    return todoDao.putById(id,title,description,iscomplete);
}