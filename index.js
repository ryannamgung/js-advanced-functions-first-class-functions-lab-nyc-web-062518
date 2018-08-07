// Code your solution in this file!
const returnFirstTwoDrivers = function(array){return array.slice(0, 2)}

const returnLastTwoDrivers = function(array){return array.slice(array.length-2, array.length)}
//or array.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
  return function(value){
    return value * integer;
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
  return func(drivers);
}
