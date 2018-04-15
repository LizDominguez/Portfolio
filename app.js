const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/projects', function(req, res) {
  let projects = [
    {
      title: "Porject 1",
      description: "something something",
      link: "www.sdfsf.com"
    }
  ];
});

app.listen(3000, function(){
  console.log("Server on port 3000");
});
