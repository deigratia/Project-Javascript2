const names= [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim",
];

let filtered_name = names.filter(name => name.indexOf("Mr.") != -1);

 const map1 = filtered_name.map(x => x + "(male)");

console.log(map1);


const names= [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim",
];

let filtered_name1 = names.filter(name => name.indexOf("Mrs.") != -1);


const map2 = filtered_name1.map(x => x + "(female)");

console.log(map2);
