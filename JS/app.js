'use strict';


var pike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCustomer: 6.3,

  getRandomCustomersPerHour: function(){

  },

};
function getRandomCustomersPerHour (){
  return this.minCustomer + Math.random * (this.maxCustomer - this.minCustomer);

}

pike.getRandomCustomersPerHour();
