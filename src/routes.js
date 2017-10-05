import {Router} from 'express';
import todos from './controllers/todos';

let router = Router();

router.get('/', (request, response) => {
    response.send(
        '<title>Todo API</title>' +
        '<h1>Todo API Reference</h1>'+
        '<h3>Method: GET</h3>' +
        '<h5>Path /api/todos - fetch all todos</h5>' +
        `<div><pre>
        response={
          "data": 
          [
              {
                  "id": 4,
                  "title": "take a bath",
                  "description": "use new shampoo",
                  "iscomplete": false
              },
              {
                  "id": 5,
                  "title": "go morning walk",
                  "description": "go to football ground",
                  "iscomplete": true
              }
          ]
        }
      </pre></div>` +
      '<h5>Path /api/todos/:id - fetch todo by id</h5>' +
      `<div><pre>
      response={
        "data": 
        [
            {
                "id": 4,
                "title": "take a bath",
                "description": "use new shampoo",
                "iscomplete": false
            }
        ]
      }
    </pre></div>` +
        '<h3>Method: POST</h3>' +
        '<h5>Path /api/todos -  create new todo</h5>' +
        `<div><pre>
      request=
      {
        "title":"bring stationaries",
        "description":"pen,ink,pencils",
        "iscomplete":"false"
      }
      response=
      {
        "data": 
        {
            "id": 6,
            "title": "bring stationaries",
            "description": "pen,ink,pencils",
            "iscomplete": false
        }
      }
    </pre></div>` +
        '<h3>Method: UPDATE</h3>' +
        '<h5>Path /api/todos/:id - update todo</h5>' +
        `<div><pre>
        request=
        {
          "title":"bring stationaries changed",
          "description":"pen,ink,pencils,sharpners",
          "iscomplete":"true"
        }
        response=
        {
          "success": "true",
          "data": 
            {
                "id": 6,
                "title": "bring stationaries changed",
                "description": "pen,ink,pencils,sharpners",
                "iscomplete": true
            }
        }
      </pre></div>` +
      '<h3>Method: DELETE</h3>' +
      '<h5>Path /api/todos/:id - delete todo</h5>' +
      `<div><pre>
      response=
      {
        "success": "true",
        "data": 
        {
            "id": 6,
            "title": "bring stationaries",
            "description": "pen,ink,pencils",
            "iscomplete": false
        }
      }
      </pre></div>`
    );
  });
router.use('/todos',todos);

export default router;