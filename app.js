const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const port = 4000;
// const ejs =require("ejs");
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
var items=["buy item","cook","eat"];
var work=[];
app.use(express.static("public"));
app.get('/', (req, res) => {
    
    const d = new Date();
    // let currentday = d.getDay();
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// var today  = new Date();

 
     var day =  d.toLocaleDateString("en-US", options);
  
    res.render(__dirname + '/view/list.ejs',{
        listtile:day , newlistitem:items 
    });
});
app.get('/work', (req, res) => {
    
 
    res.render(__dirname + '/view/list.ejs',{
        listtile:"work" , newlistitem:work
    });
});

app.post('/', (req, res) => {
  var item = req.body.newitem;
  if(req.body.list=="work"){
    work.push(item);
    res.redirect('/work');
  }
    else{
        items.push(item);
        res.redirect('/');
    }
    
  
  })

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})