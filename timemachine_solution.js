var timeMachine = function (owner, color, sizeInside, sizeOutside) {
  this.owner = owner;
  this.color = color;
  this.sizeInside = sizeInside;
  this.sizeOutside = sizeOutside;
  this.passengers = [];

};


timeMachine.prototype.addPassenger = function(name) {
    this.passengers.push(name);
  }

timeMachine.prototype.passengerCount = function() {
  return this.passengers.length;
}

timeMachine.prototype.isRealTardis = function() {
  return this.sizeInside > this.sizeOutside && this.color === "blue";
}

timeMachine.prototype.listPassengers = function() {
  return this.passengers;
}

timeMachine.prototype.nameLengths = function() {
//   return this.passengers.reduce(function(prev,curr) {
//     return prev + curr.length;
//   }, 0)
//
  this.passengers.join('').length;
}
module.exports = timeMachine;
