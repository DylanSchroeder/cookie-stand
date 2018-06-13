'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var clarence = {
  name: 'Clarence',
  minCustomer: 23,
  maxCustomer: 65,
  avgCustomer: 6.3,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random() * (this.maxCustomer - this.minCustomer);

  },
  calculateCookiesPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
    }
  },
};


var lowden = {
  name: 'Lowden',
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random() * (this.maxCustomer - this.minCustomer);

  },
  calculateCookiesPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
    }
  },
};



var stanwood = {
  name: 'Stanwood',
  minCustomer: 11,
  maxCustomer: 38,
  avgCustomer: 3.7,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random() * (this.maxCustomer - this.minCustomer);

  },
  calculateCookiesPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
    }
  },
};


var mechanicsville = {
  name: 'Mechanicsville',
  minCustomer: 20,
  maxCustomer: 38,
  avgCustomer: 2.3,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random() * (this.maxCustomer - this.minCustomer);

  },
  calculateCookiesPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
    }
  },
};


var tipton = {
  name: 'Tipton',
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random() * (this.maxCustomer - this.minCustomer);

  },
  calculateCookiesPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
    }
  },
};

clarence.calculateCookiesPerHour();

var clarenceList = document.getElementById('clarence');
var clarenceHead = document.getElementById('cHead');
clarenceHead.textContent = clarence.name;
for(var i = 0; i < clarence.cookiesPerHour.length; i++){
  var clarenceLi = document.createElement('li');

  clarenceLi.textContent = clarence.cookiesPerHour[i];
  clarenceList.appendChild(clarenceLi);

}
lowden.calculateCookiesPerHour();

var lowdenList = document.getElementById('lowden');
var lowdenHead = document.getElementById('lHead');
lowdenHead.textContent = lowden.name;
for(var i = 0; i < lowden.cookiesPerHour.length; i++){
  var lowdenLi = document.createElement('li');

  lowdenLi.textContent = lowden.cookiesPerHour[i];
  lowdenList.appendChild(lowdenLi);

}
stanwood.calculateCookiesPerHour();

var stanwoodList = document.getElementById('stanwood');
var stanwoodHead = document.getElementById('sHead');
stanwoodHead.textContent = stanwood.name;
for(var i = 0; i < stanwood.cookiesPerHour.length; i++){
  var stanwoodLi = document.createElement('li');

  stanwoodLi.textContent = stanwood.cookiesPerHour[i];
  stanwoodList.appendChild(stanwoodLi);

}
mechanicsville.calculateCookiesPerHour();

var mechanicsvilleList = document.getElementById('mechanicsville');
var mechanicsvilleHead = document.getElementById('mHead');
mechanicsvilleHead.textContent = mechanicsville.name;
for(var i = 0; i < stanwood.cookiesPerHour.length; i++){
  var mechanicsvilleLi = document.createElement('li');

  mechanicsvilleLi.textContent = mechanicsville.cookiesPerHour[i];
  mechanicsvilleList.appendChild(mechanicsvilleLi);

}
tipton.calculateCookiesPerHour();

var tiptonList = document.getElementById('tipton');
var tiptonHead = document.getElementById('tHead');
tiptonHead.textContent = tipton.name;
for(var i = 0; i < tipton.cookiesPerHour.length; i++){
  var tiptonLi = document.createElement('li');

  tiptonLi.textContent = tipton.cookiesPerHour[i];
  tiptonList.appendChild(tiptonLi);

}
