const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
app.use(express.json({limit:'1mb'}))

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager1'


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

MongoClient.connect(connectionURL, {useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }


    var db = client.db(databaseName)

    
app.post('/api', (req, res) => {
    // const db = client.db(databaseName)
     
    var a= req.body.img64
    console.log(typeof a)
    console.log(a)
    

    // var a=req.body.latitude
    // var b=req.body.longitude
    // var c = new Date();
    // console.log(a)
    // console.log(b)
    // console.log(c)

    db.collection('number11').insertOne({
        imageupload:a
        

    },(error,result)=>{
        if(error){
            console.log('please provide other number',undefined)
        }
        console.log(undefined,'everything is fine')
    })
    

    
})





  console.log('connected to the database')
    
})


app.get('', (req, res) => {
    res.render('map')
})



app.get('/img', (req, res) => {
    res.render('imagae')
})





app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})