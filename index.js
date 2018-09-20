// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(d => d === name || d.toLowerCase() === name );
}

function fuzzyMatch(drivers, subStr){
  return drivers.filter(d => d.includes(/^subStr/)  );
}
