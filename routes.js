const router = require('express').Router()
const { getTodos, postTodos } = require('./controller-library')

router
  .route('/')
  .get(getTodos)
  .post(postTodos)

module.exports = router
