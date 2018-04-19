let students = [
  {name: 'Alex Smith', startYear: 1975, endYear: 1979},
  {name: 'John Donowan', startYear: 1987, endYear: 1992},
  {name: 'Steave Bush', startYear: 1978, endYear: 1982},
  {name: 'Garry Macneir', startYear: 1971, endYear: 1975},
  {name: 'Shon Pen', startYear: 1985, endYear: 1989},
  {name: 'Bill Reinolds', startYear: 1987, endYear: 1992},
  {name: 'Rony Salivan', startYear: 1985, endYear: 1989},
  {name: 'Alex Nevil', startYear: 1980, endYear: 1985},
  {name: 'Martin Freeman', startYear: 1979, endYear: 1984},
  {name: 'Lesley Oneil', startYear: 1986, endYear: 1990},
  {name: 'Fred Oliver', startYear: 1982, endYear: 1987},
  {name: 'Cristian Beil', startYear: 1975, endYear: 1980},
  {name: 'Samanta Gir', startYear: 1974, endYear: 1979},
  {name: 'Felix Urgan', startYear: 1983, endYear: 1988},
  {name: 'Jenifer Lopez', startYear: 1988, endYear: 1992},
  {name: 'Sonya James', startYear: 1965, endYear: 1969},
  {name: 'Lori Makenroy', startYear: 1990, endYear: 1994},
  {name: 'Brayan Ostin', startYear: 1991, endYear: 1996},
  {name: 'Kelly Roland', startYear: 1966, endYear: 1971},

];

let dateStart = 1971;
let dateEnd = 1976;

function showStudentsByPeriod() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i].startYear >= dateStart && this[i].startYear <= dateEnd || this[i].endYear >= dateStart && this[i].endYear <= dateEnd ) {
      result.push(this[i].name); 
    }
  };
  return alert(`In the period from ${dateStart} to ${dateEnd}, such students studied: ${result}`);
};

showStudentsByPeriod.call(students);

let firstYearOfUniversityWork = 1965;
let nowYear = 1997;

function showMaxAmountStudentsByPeriod() {
  let amount = 0;
  let year;
  for (let i = firstYearOfUniversityWork; i <= nowYear; i++){
    let currentAmount = 0;
    for(let j = 0; j < this.length; j++) { 
      if (i >= this[j].startYear && i <= this[j].endYear){
           currentAmount++;
      }; 
    }; 
    if (currentAmount >= amount) {
      amount = currentAmount;
      year = i;
    };      
  };
return alert(`The greatest amount of students ${amount} studied in ${year} year`);
  
};

showMaxAmountStudentsByPeriod.call(students);