const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Book = require('./models/book.model')
const User = require('./models/user.model')


const port = 3000
const uri = "mongodb+srv://hao1:haoiungoc@cluster0.ouxzc.mongodb.net/book?retryWrites=true&w=majority"

mongoose
.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to mongo Atlas")
});

// config 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// lam chuc nang dang nhap
app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'pug')


//router index
app.get("/", (req, res) => {
    res.render("login")
})
app.get("/index", (req, res) => {
    res.render("index")
})

//api login
app.post("/api/login", (req, res) => {
    //so sanh data voi database
    let { mail, password } = req.body
    console.log("call")
    User
    .findOne({ mail : mail })
    .then(user => {
        console.log(user)
        if(user){
            //
            if(user.password == password){
                // 
                res.json({ success : "wellcome" })
            } else {
                res.json({ err : "sai pass" })
            }

        } else {
            res.json({ err : "sai mail" })
        }
    })
    .catch(err => {  
        console.log(err)
        res.json({ err : "loi server"})
    })
})



//

// hien thi danh sach quyen sach
app.get("/api/book/", (req, res) => {
    Book
    .find({}, 'title author desc price cover')
    .then( books => res.json({ books : books }) )
    .catch( err => res.sendStatus(403))
})


// hien thi chi tiet tung quyen sach
app.get('/api/book/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
    Book
    .find( { _id : id } )
    .then( book => res.json({ book }) )
    .catch( err => res.sendStatus(403) )
})


// tajo quyen sach
app.post("/api/book/create", (req, res) => {
    let data = req.body
    Book.create(data).save()
})


// suar sach
app.path("/api/book/:id/update", (req, res) => {
    
})


//xoa sach
app.delete("/api/book/:id/delete", (req, res) => {
    
})

app.all("*", (req, res) => res.sendStatus(404) )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))