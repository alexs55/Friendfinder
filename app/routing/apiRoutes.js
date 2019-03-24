var friends = require('../data/friends.js');



module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });




  // Create New friends - takes in JSON input
  app.post("/api/friends", function (req, res) {
    var newfriend = req.body;
    var friendmatch = 100;
    var selected;
    console.log("added new friend");
    for (var i = 0; i < friends.length; i++) {
      var match = friends[i]
      var result = 0;
      for (var x = 0; x < match.scores.length; x++) {
        console.log(Math.abs(newfriend.scores[x] - match.scores[x]))
        result += Math.abs(newfriend.scores[x] - match.scores[x]);
      }
      if (result < friendmatch) {
        console.log(result);
        friendmatch = result;
        selected = match;
      }
    }
    console.log(selected);
    console.log(newfriend);
    res.send(selected);
    friends.push(newfriend)
  });
};