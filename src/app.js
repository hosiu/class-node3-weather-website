const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// Define paths for Express config
const publicDirectoryPAth = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials') 

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve 
app.use(express.static(publicDirectoryPAth))

app.get('' , (req, res) => {
    res.render('index', {
        title: 'Weather Check',
        author: "Mik"
    })
})

app.get('/about' , (req, res) => {
    res.render('about', {
        title: 'About Page',
        author: "Stacy"       
    })
})

app.get('/help' , (req, res) => {
    res.render('help', {
        helpText: 'This is a help page.',
        title: 'Help Page',
        author: "Admin"       
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide the address."
        })
    }

    geoCode(req.query.address, (error, { longtitude, latitue, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(longtitude, latitue, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
        
            res.send({
            location,
            temperature: forecastData,
            user_input_address: req.query.address
            })
        })
    })


})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide the search.'
        })
    }

    console.log(req.query.search)

    res.send({
        products: []
    })
})

// Have to put at the end for the wildcard pages
app.get('/help/*', (req, res) => {
    res.render('404', {
        errorDisplayText: "Help page is not here", 
        author: "Help Admin"     
    })
})  

app.get('*', (req, res) => {
    res.render('404', {
        errorDisplayText: "No such that page", 
        author: "404 Admin"     
    })
})  

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})