const puppeteer = require('puppeteer');
const getPrice = async (url) => {
  const browser = await puppeteer.launch({
    args: ['--disabled-setuid-sandbox', '--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('.g9WBQb');
  const price = await page.$eval('.g9WBQb', (el) => el.innerHTML);
  console.log('Price: ', price);
};
getPrice('https://www.google.com/shopping/product/9333373489557772337/');



//Bcrypt notes
// install express, bcrypt, nodemon on devstart

// IN SERVER.JS FILE:
const express = require ('express');
const { json } = require('express');
const app = express()
const bcrypt = require('bcrypt')

// get users from database

app.get('/users', (req, res)=>{
  res.json(users)
})

app.post('/users', async (req,res)=>{
  try{
    // const salt = await bcrypt.genSalt()
    const hashedPassword =  await bcrypt.hash(req.body.password, 10) //bcrypt will generate with default salt of 10
    console.log(salt)
    console.log(hashedPassword)
    const user = {name: req.body.name, password: hashedPassword}
    users.push(user) // add to database
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/users/login', async (req,res)=>{
  const user = users.find(user=> user.name = req.body.name)

  if (user == null) {
    return res.status(400).send('Cannot find user')
  }

  try{
    if (await bcrypt.compare(req.body.password, user.password)){
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch{
    res.status(500).send()
  }
})

app.listen(3000)

// IN REQUEST.REST FILE:
GET http:localhost:3000/users

POST http:localhost:3000/users/login
Content-Type: application/json

{"name" : "Christy",
"password" : "password"}

