// Code your solution in this file
function findMatching(drivers, name){
  re = new RegExp(name, "i");
  return drivers.filter(d => d.match(re));
}

function fuzzyMatch(drivers, subStr){
  var re = new RegExp(subStr);
  return drivers.filter(d => d.search(re)  );
}

function matchName(drivers, name){
  return drivers.filter(d => d.name === name  );
}
