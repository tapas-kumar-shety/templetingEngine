const express = require('express');
const app = express();
const port = 3000;

const path= require('path');
const { nextTick } = require('process');

app.set('view engine', 'ejs');


app.use(express.static("public"));


app.get('/', (req, res) => {
    let siteName="adidas";        /////  both these we get from the database now we ahve to put these
    let searchText="Search Now";  ///// in this template
res.render('home',{siteName: siteName, searchText: searchText});
});

app.get('/about', (req, res) => {
    let siteName="adidas";        
    let searchText="Search Now";  
res.render('about',{siteName: siteName, searchText: searchText});
});

app.get('/blog/:slug',(req,res)=>{
    let blogTitle="addisdas why and when";   
    let blogContent= "its a very good brand";  
res.render('blogpost',{blogTitle:blogTitle,blogContent:blogContent});
  next();           
                    /////we also have to add these siteName and searchText in about page ,since it 
                  //// also contains the navbar esle it          
})





app.listen(port, () => {
console.log(`App listening to port http://localhost:${port}`)});