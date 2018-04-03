const names= [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim",
];

let filtered_name = names.filter(name => name.indexOf("Mr.") === 0);

console.log(filtered_name);
