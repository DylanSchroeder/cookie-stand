'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Shop (name, minCustomer, maxCustomer, avgCustomer){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;

  this.cookiesPerHour = [];
}

Shop.prototype.getCustomersPerHour = function (){
  return this.minCustomer + Math.random() * (this.maxCustomer - this.minCustomer);

};
Shop.prototype.calculateCookiesPerHour = function(){
  for(var i = 0; i < hours.length; i++){
    this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
  }
};

var clarence = new Shop('Clarence', 23, 65, 6.3);
console.log(clarence);

var lowden = new Shop('Lowden', 3, 24, 1.2);
console.log(lowden);

var stanwood = new Shop('Stanwood', 11, 38, 3.7);
console.log(stanwood);

var mechanicsville = new Shop('Mechanicsville', 20, 38, 2.3);
console.log(mechanicsville);

var tipton = new Shop('Tipton', 2, 16, 4.6);
console.log(tipton);

//list stuff

clarence.calculateCookiesPerHour();

var clarenceList = document.getElementById('clarence');
var clarenceHead = document.getElementById('cHead');
clarenceHead.textContent = clarence.name;
var sumCookies = 0;
for(var i = 0; i < clarence.cookiesPerHour.length; i++){
  var clarenceLi = document.createElement('li');
  sumCookies += clarence.cookiesPerHour[i];
  clarenceLi.textContent = hours[i] + ': ' + clarence.cookiesPerHour[i] + ' cookies';
  clarenceList.appendChild(clarenceLi);

}
clarenceLi = document.createElement('li');
clarenceLi.textContent = 'Total: ' + sumCookies;
clarenceList.appendChild(clarenceLi);

lowden.calculateCookiesPerHour();

var lowdenList = document.getElementById('lowden');
var lowdenHead = document.getElementById('lHead');
lowdenHead.textContent = lowden.name;
var sumCookies = 0;
for(var i = 0; i < lowden.cookiesPerHour.length; i++){
  var lowdenLi = document.createElement('li');
  sumCookies += lowden.cookiesPerHour[i];
  lowdenLi.textContent = hours[i] + ': ' + lowden.cookiesPerHour[i] + ' cookies';
  lowdenList.appendChild(lowdenLi);

}
lowdenLi = document.createElement('li');
lowdenLi.textContent = 'Total: ' + sumCookies;
lowdenList.appendChild(lowdenLi);

stanwood.calculateCookiesPerHour();

var stanwoodList = document.getElementById('stanwood');
var stanwoodHead = document.getElementById('sHead');
stanwoodHead.textContent = stanwood.name;
var sumCookies = 0;
for(var i = 0; i < stanwood.cookiesPerHour.length; i++){
  var stanwoodLi = document.createElement('li');
  sumCookies += stanwood.cookiesPerHour[i];
  stanwoodLi.textContent = hours[i] + ': ' + stanwood.cookiesPerHour[i] + ' cookies';
  stanwoodList.appendChild(stanwoodLi);

}
stanwoodLi = document.createElement('li');
stanwoodLi.textContent = 'Total: ' + sumCookies;
stanwoodList.appendChild(stanwoodLi);


mechanicsville.calculateCookiesPerHour();

var mechanicsvilleList = document.getElementById('mechanicsville');
var mechanicsvilleHead = document.getElementById('mHead');
mechanicsvilleHead.textContent = mechanicsville.name;
var sumCookies = 0;
for(var i = 0; i < stanwood.cookiesPerHour.length; i++){
  var mechanicsvilleLi = document.createElement('li');
  sumCookies += mechanicsville.cookiesPerHour[i];
  mechanicsvilleLi.textContent = hours[i] + ': ' + mechanicsville.cookiesPerHour[i] + ' cookies';
  mechanicsvilleList.appendChild(mechanicsvilleLi);

}
mechanicsvilleLi = document.createElement('li');
mechanicsvilleLi.textContent = 'Total: ' + sumCookies;
mechanicsvilleList.appendChild(mechanicsvilleLi);


tipton.calculateCookiesPerHour();

var tiptonList = document.getElementById('tipton');
var tiptonHead = document.getElementById('tHead');
tiptonHead.textContent = tipton.name;
var sumCookies = 0;
for(var i = 0; i < tipton.cookiesPerHour.length; i++){
  var tiptonLi = document.createElement('li');
  sumCookies += tipton.cookiesPerHour[i];
  tiptonLi.textContent = hours[i] + ': ' + tipton.cookiesPerHour[i] + ' cookies';
  tiptonList.appendChild(tiptonLi);

}
tiptonLi = document.createElement('li');
tiptonLi.textContent = 'Total: ' + sumCookies;
tiptonList.appendChild(tiptonLi);

//form stuff
function handleSubmit(event){
  event.preventDefault();

  var shop = event.target.shop.value;
  var minCustomer = event.target.minCustomer.value;
  var maxCustomer = event.target.maxCustomer.value;
  var avgCustomer = event.target.avgCustomer.value;

  var newShop = new Shop( shop, minCustomer, maxCustomer, avgCustomer );
  console.log(newShop);

}

var form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);