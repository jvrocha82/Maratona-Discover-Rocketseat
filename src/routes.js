const express = require('express');
const routes = express.Router()
const views = __dirname + '/views/'

const profile ={
    name:"João Vitor",
    avatar:"https://media-exp1.licdn.com/dms/image/C4D35AQFsQUgYk2NS9A/profile-framedphoto-shrink_200_200/0/1617670754521?e=1619215200&v=beta&t=M6jhYiGP4CrbETMoFn4oAbUh9G2QBAiG7JKKUIXbmqA",
    "monthly-budget": 3000,
    "days-per-week":5,
    "hours-per-day":5,
    "vacation-per-year":4

}
routes.get('/',(req,res) =>  res.render(views + "index"))
routes.get('/job',(req,res) =>  res.render(views + "job"))
routes.get('/job/edit',(req,res) =>  res.render(views + "job-edit"))
routes.get('/profile',(req,res) =>  res.render(views + "profile",{profile}))


module.exports = routes;