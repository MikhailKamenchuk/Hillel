var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter();

function Request() {
   var self = this;

   this.bigData = new Array(1e6).join('*');

   this.send = function(data) {
       console.log(data, 'dkcbsdkcbjs');
   };

   function onData(info) {
       console.log('webbwkbk')
       self.send(info);
   };

   this.end = function() {  
    console.log('db');
    db.removeListener('data', onData)  
   };

   db.on('data', onData);
}
setInterval(function() {
   var request = new Request();
   db.emit('data', 'some data')
   request.end();
   console.log(process.memoryUsage().heapUsed);
}, 200);