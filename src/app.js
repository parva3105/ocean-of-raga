const express = require('express');
const path = require('path');
const hbs = require('hbs');
const e = require('express');

const app = express()
const port = process.env.PORT || 8000 //8000 to run locally

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine','hbs')
app.set('views' , viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.get('' ,(req , res) => {
    res.render('index', {
        title : 'Ocean Of Ragas',
    })
})

app.listen(port ,() => {
    console.log('Server is up on port '+ port);
})

console.log("Hi");