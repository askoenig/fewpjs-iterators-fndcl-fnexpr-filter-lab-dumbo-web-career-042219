// Code your solution here
let findMatching = (driverArray, string) => {
  let matching = driverArray.filter(
    name => name.toLowerCase() == string.toLowerCase()
  );
  return matching;
};

let fuzzyMatch = (driverArray, string) => {
  let matching = driverArray.filter(
    name =>
      name.toLowerCase().substring(0, string.length) == string.toLowerCase()
  );
  return matching;
};

let matchName = (driverArray, string) => {
  let matching = driverArray.filter(driverObj => driverObj.name == string);
  return matching;
};
