var moment = require('moment');
var time = function (time){
  var result = {};
  if(moment(time, "MM/DD/YYYY", true).isValid()){
    var date = moment(time,'MMMM DD YYYY');
    var result = {
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
