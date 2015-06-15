var timeMachine = require('../timemachine');


// timeMachine
// State: owner, color, passengers, sizeInside, sizeOutside
// Behavior: addPassenger, listPassengers, isRealTardis

describe('properties', function() {
  var tardis = new timeMachine("Doctor", "blue", 100, 40 );

  it('has a String owner', function() {
    expect(tardis.owner).toEqual('Doctor');
  });

  it('has a String color', function() {
    expect(tardis.color).toEqual('blue');
  });

  it('has an Integer sizeInside', function() {
    expect(tardis.sizeInside).toEqual(100);
  });

  it('has an Integer sizeOutside', function() {
    expect(tardis.sizeOutside).toEqual(40);
  });
});

describe('addPassengers', function() {
  var tardis;
  beforeEach(function() {
    tardis = new timeMachine("Doctor", "blue", 100, 40);
  });

  it('takes a String argument for the passenger', function() {
    tardis.addPassenger('Amy');
    expect(tardis.passengers).toEqual(['Amy']);
  });

  it('correctly handles multiple passengers', function() {
    tardis.addPassenger('Amy');
    tardis.addPassenger('Rory');
    expect(tardis.passengers).toEqual(['Amy', 'Rory']);
  });

  it('returns 0 when there are no passengers in the Time Machine instance', function() {
    var tardis = new timeMachine("Doctor", 'blue', 100, 40);

    expect(tardis.passengerCount()).toEqual(0);
  });
});

describe('#isRealTardis', function() {
  var tardis;

  beforeEach(function() {
    tardis = new timeMachine('Doctor','blue', 100, 40);
  });

  it('returns false when the sizeInside is smaller than the sizeOutside', function() {
    tardis.sizeInside = 30;

    expect(tardis.isRealTardis()).toBe(false);
  });

  it('returns false when the time machine is not blue', function() {
    tardis.color = "white";

    expect(tardis.isRealTardis()).toBe(false);
  });

  it('returns true when the machine is bigger on the inside and is blue', function() {
    expect(tardis.isRealTardis()).toBe(true);
  });
});

describe('#listPassengers', function() {
  it('returns a list of all passengers, not including the owner', function() {
    var tardis = new timeMachine('Doctor', 'blue', 100, 40);
    tardis.addPassenger('Martha');
    tardis.addPassenger('Amy');
    tardis.addPassenger('Rory');

    tardis.listPassengers();

    expect(tardis.listPassengers()).toEqual(['Martha', 'Amy', 'Rory']);
  });
});

describe('#nameLengths', function() {
  it('returns the total number of characters for all passenger names (so Rory, Amy as passengers would return 7)', function() {
    var tardis = new timeMachine('Doctor', 'blue', 100, 40);
    tardis.addPassenger('Martha');
    tardis.addPassenger('Amy');
    tardis.addPassenger('Rory');

    tardis.nameLengths();

    expect(tardis.nameLengths()).toEqual(13);
  });
});
