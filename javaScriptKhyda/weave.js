console.log();
var mobileOperatingSystems = "Apple:iOS :: Google:Android";
console.log(mobileOperatingSystems);
console.log();

var cod = "ami bala \n fua na"
console.log(cod);
console.log();

const watchBox =["tissot","hamilton","iwc","tudor"];
console.log("the watch box has " + watchBox.length + " brands");
for(const brands of watchBox){console.log(brands)};
console.log();

const pool = ["duck","duck","duck","goose","duck","goose","duck"];
let duckCount =0;
let gooseCount =0;


for(const an of pool){
    if(an==="duck"){duckCount++}
    else if(an==="goose"){gooseCount++};
}

console.log("there are "+duckCount + " ducks");
console.log("there are "+gooseCount + " geese");
console.log();

var bs = ["beautiful soup","black sheep","thas cap"];
console.log("original array: "+bs);
console.log();

for(var el of bs){
    console.log(el.toUpperCase());
}
// toUpperCase() doesn't overwrite & modify the original strings
