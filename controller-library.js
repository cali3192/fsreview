const db = require('./db')

const getTodos = (req, res) => {
  db.query(`select * from todos`, (err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    }
    else res.send(data)
  })
}

const postTodos = (req, res) => {
  const { description } = req.body
  db.query(
    `insert into todos (description) values (?)`,
    [description],
    (err) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      }
      else res.sendStatus(201)
    }
  )
}

module.exports = {
  getTodos,
  postTodos
}
