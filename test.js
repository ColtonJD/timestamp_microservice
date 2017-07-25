var moment = require('moment');
var time = process.argv[2];
function ok (time){
  if((moment(time, "MM/DD/YYYY").isValid(), true) === true){
     console.log('working');
  }else{
    console.log('broken');
  }
};
ok();