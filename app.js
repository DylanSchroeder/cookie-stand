'use strict';


var pike = {
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,

  getRandomCustomersPerHour: function(){

  },

};
function getRandomCustomersPerHour (){
  /* minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (this.max - this.min) + min); */
  return pike.minCust + Math.random * (this.maxCust - this.minCust);

}

pike.getRandomCustomersPerHour();
