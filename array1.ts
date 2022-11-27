const names : string[] = [];
names.push("Dylan");
names.push("Pasinee");

console.log(names[0]);
console.log(names[1]);
console.log(names.length);

for (let i = 0; i<names.length;i++){
    console.log(names[i]);
}

for(let ind in names) {
    console.log(names[ind]);
}
names.forEach(function(name) {
    console.log(name);
});