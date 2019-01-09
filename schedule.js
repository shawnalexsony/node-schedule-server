var schedule = require('node-schedule');

var rule = new schedule.RecurrenceRule();
// rule.second = 5;
rule.second = new schedule.Range(0, 59, 5);
// Set up the time or date for scheduled tasks


const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>');
  console.log('req from browser');
});


app.listen(8080, () => {
  console.log('Server is up on port 8080');

  schedule.scheduleJob(rule, function(){
    // console.log(new Date(), 'The 5th second of the minute.');
   console.log('every 5 seconds');
    //tasks to be done

});

});
