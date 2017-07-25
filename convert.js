var moment = require('moment');
var time = function (time){
  var result = {};
  if(moment(time, "MMMM DD YYYY").isValid()){
    var date = moment(time,'MMMM DD YYYY');
    var data = {
        unix: date.format('X'),
        natural: time
    }
  }else if(isNaN(time) === false){
    var date = moment.unix(time);
    var result = {
        unix: time,
        natural : date.format('MMMM DD YYYY')
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