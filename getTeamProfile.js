var request = require('superagent');

var getTeamProfile = function(path, callback) {
  request
    .get('https://slack.com/api/team.profile.get?token=xoxp-2908811352-8029249108-60946493798-04f55c5dcf&pretty=1', function(err, res) {
      callback(null, res.text)
        if(err) {
          callback(err)
        }
        else {
          callback(null, res)
        }
        console.log("This is res: ", res)
    })
}

var exports = module.exports = {};
