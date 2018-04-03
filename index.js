var names = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];
function types(names){
  var result = ""
  for (var i= 0;names.length; i++){
    if(typeof names[i]=="string"){
      result += names[i]
    }
  }
  return result;
}

console.log(types(names));
