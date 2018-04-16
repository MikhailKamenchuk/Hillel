//Chainig function
let maths = {
   number: 0,
   sum: function() {
     console.log(++this.number);
     return this;
   },
   mul: function() {
       this.number = Math.pow(this.number, 2);
       console.log(this.number)
       return this;
   },
   sub: function() {
     console.log(this.number--);
     return this;
   },
   div: function() {
     this.number = Math.sqrt(this.number);
     console.log(this.number);
     return this;
   },
   showResult: function() {
     console.log(this.number);
     return this;
   }
};

maths.sum().sum().mul().mul().sum().showResult

//Исправление функции setTimeout несколькими способами
// First
function doTimeout(index) {
	setTimeout(function() { 
	console.log(index); 
	}, 100);
};

for (var i = 0; i < 10; i++){
	doTimeout(i);
};

// Second
for(var i = 0; i < 10; i++) {
	(function(i) { 
		setTimeout(function() {
		console.log(i);
		}, i * 100)
	})(i); 
};

// Third
for (var i = 0; i < 10; i++) {  
    setTimeout(function(n){ 
      console.log(n); 
    }.bind(null, i), i * 100);
};