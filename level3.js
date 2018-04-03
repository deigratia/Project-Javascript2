var names =[
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim",
];

function searchName(search) {
let search_name = names.filter(name => name.indexOf(search) != -1);
return search_name;
}

console.log(searchName("Abdul"));
