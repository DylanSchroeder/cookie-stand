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
  minCustomer: 11,
  maxCustomer: 38,
  avgCustomer: 3.7,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
  calculateCookiesPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
    }
  },
};


var mechanicsville = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCustomer: 2.3,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
  calculateCookiesPerHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.cookiesPerHour[i]= Math.floor(this.getCustomersPerHour()*this.avgCustomer);
    }
  },
};


var tipton = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,

  cookiesPerHour: [],

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

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
