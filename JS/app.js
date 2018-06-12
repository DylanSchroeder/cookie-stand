'use strict';


var clarence = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCustomer: 6.3,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },

};
clarence.getCustomersPerHour();

var lowden = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};
lowden.getCustomersPerHour();


var stanwood = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCustomer: 3.7,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};
stanwood.getCustomersPerHour();

var mechanicsville = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCustomer: 2.3,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};
mechanicsville.getCustomersPerHour();

var tipton = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCustomer: 1.2,

  getCustomersPerHour: function(){
    return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

  },
};
tipton.getCustomersPerHour();