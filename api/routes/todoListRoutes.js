module.exports = function(app) {
  let todoList = require('../controllers/todoListController.js')

  app.route('/tasks')
    .get(todoList.list_all_tasks)

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
}