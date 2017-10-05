import * as todoDao  from '../dao/todo';

import * as Dao from '../dao/todo';

export function checkExists(request, response, next) {
  Dao.fetchById(request.params.id).then(todo => {
      console.log('todo',todo);
    if (todo==undefined) {
      return response.status(404).json({ error: `error no such file` })
    }
    next();
  })
    .catch(err => {
      next(err);
    });
}
