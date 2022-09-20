// import modules

import express from 'express'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// Mount Middleware (app.use)
app.get('/home', function(req, res) {
  res.render('home')
})


// Mount routes



// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})