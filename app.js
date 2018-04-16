const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  let projects = [
    {
      title: "Porject 1",
      description: "something something",
      url: 'http://',
      link: "www.sdfsf.com",
      category: "web development"
    }
  ];

});

app.listen(3000, function(){
  console.log("Server on port 3000");
});
