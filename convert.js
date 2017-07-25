var moment = require('moment');
var time = function (time){
  var result = {};
  if(moment(time, "MMMM/DD/YYYY", true).isValid()){
    var uni = '';
    result = {
      unix: moment.unix(time),
      natural: time
    }
  }else if(isNaN(time) === false){
    var nat = '';
    result = {
      unix: time,
      natural: time.format('MMMM DD YYYY')
    }
  }else{
    result = {
      unix: null,
      natural: null
    }
  }
  
  return result;
};

module.exports = time;