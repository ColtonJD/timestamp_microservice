var moment = require('moment');
var time = function (time){
  var result = {};
  if(moment(time, "MMMM/DD/YYYY", true).isValid()){
    /.../
  };
  else if(isNaN(time) === false){}
};

module.exports = time;