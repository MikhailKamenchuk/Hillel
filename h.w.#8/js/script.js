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

maths.sum().sum().mul().mul().sum().showResult();