// Code your solution in this file
function findMatching(drivers, name){
  re = new RegExp(name, "i");
  return drivers.filter(d => d.match(re) );
}

function fuzzyMatch(drivers, subStr){
  var re = new RegExp(subStr,'ab+');
  return drivers.filter(d => d.search(subStr)  );
}
