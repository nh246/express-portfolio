const express = require('express')
const app = express()
const cors = require('cors')
const ejs = require('ejs');
require('dotenv').config()

console.log(process.env.PASSWORD)


const port = 3000

// middleware
app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.set('view engine', 'ejs');


// routes
app.get('/', (req, res) => {res.render('index')});
app.get("/about", (req, res) => res.render("about"))
app.get("/projects", (req, res) => res.render("projects"))
app.get("/contact", (req, res) => res.render("contact"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})