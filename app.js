const express = require('express')
const mongoose = require('mongoose')
const exphbs =require('express-handlebars')
const Todo = require('./models/todo')
const bodyParser = require('body-parser')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})




app.get('/' , (req,res) =>{
Todo.find()
.lean()
.then(todos => res.render('index' , {todos}))
.catch(error => console.error(error))
})


app.post('/todos' , (req,res) =>{
  const name = req.body.name
  return Todo.create({name})
  .then(() =>res.redirect('/'))
  .catch(error => console.log(error) )
  })




app.get('/todos/new' , (req,res) =>{
return res.render('new')
})



app.listen(3000 , () =>{
    console.log(`Express is listening to http://localhost:3000`);
})