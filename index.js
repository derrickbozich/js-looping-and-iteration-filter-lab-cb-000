// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(d => d === name || d.charAt(0).toLowerCase() === name );
}
