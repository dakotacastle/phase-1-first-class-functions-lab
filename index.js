// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {
    return function(x) {
        return x * x
    }
}

const fareDoubler = m => m * 2;

const fareTripler = m => m * 3;

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
}