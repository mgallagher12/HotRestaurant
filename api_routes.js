modules.export=function(app)
{
var data = require('./data');

var wait=data.waitList[];
var reserved=data.tables[];
// ========Data=============================================
app.get("/api/---", function(req, res) {
 // var chosen = req.params.characters;

    // for (var i = 0; i < reserved.length; i++) 
    // {
    //     return res.json(reserved[i]);
    // }
    // for (var i = 0; i < wait.length; i++) 
    // {
    //     return res.json(wait[i]);
    // }
    return res.json(wait,reserved);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  if(reserved.length<4)
  {
    reserved.push(newcharacter);
  }
  else
  {
    wait.push(newcharacter);
  }
  // res.json(newcharacter);
});

}
