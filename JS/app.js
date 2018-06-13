'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var clarence = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCustomer: 6.3,

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


var lowden = {
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

var storeList = document.getElementById('stores');
var lowdenLi = document.createElement('li');

lowdenLi.textContent = 'test';
storeList.appendChild(lowdenLi);
