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
};
//This is where I'm stuck, part 3 I think
function  {
  for(var i = 0; i < hours.length; i++) {
  }
}


var lowden = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};



var stanwood = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCustomer: 3.7,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};


var mechanicsville = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCustomer: 2.3,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};


var tipton = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};
