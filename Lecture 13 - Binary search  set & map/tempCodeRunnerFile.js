let map = new Map([
  ["name3", "sultan"],
  ["name4", "sunny"],
]);
//or
map.set("name", "sultan");
map.set("name2", "sunny");

const mapArr = [...map];
console.log(mapArr);

//checking if a key is present or not
console.log("checking if `name` is present or not?", map.has("name"));

//getting the value of a specific key
console.log("value of `name2` key is: ", map.get("name2"));