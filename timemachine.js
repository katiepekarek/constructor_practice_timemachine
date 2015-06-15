var timeMachine = function (owner, color, sizeInside, sizeOutside) {
  this.owner = owner;
  this.color = color;
  this.sizeInside = sizeInside;
  this.sizeOutside = sizeOutside;
  this.passengers = [];
}

timeMachine.prototype.addPassenger = function(passenger){
  this.passengers.push(passenger);
  return this.passengers;
};

timeMachine.prototype.passengerCount = function(){
  return this.passengers.length;
};

timeMachine.prototype.isRealTardis = function(){
  return this.sizeOutside < this.sizeInside && this.color == "blue";
};

timeMachine.prototype.listPassengers = function(){
  if (this.passengers.indexOf(this.owner) !== -1){
    this.passengers.splice(this.passengers.indexOf(this.owner), 1)
  }

  return this.passengers
};


timeMachine.prototype.nameLengths = function(){
  var lengths = [];
  this.passengers.forEach(function(person){
    lengths.push(person.length);
    return lengths;
  });

  return lengths.reduce(function(prev, curr){return prev + curr;})
};
module.exports = timeMachine;
