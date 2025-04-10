var num1 = 4;
var num2 = 7;

var str1 = 'Woody';
var str2 = 'Gamertag';

function swapWithTemp(inp1,inp2){
    console.log('inp1 is ' + inp1);
    console.log('inp2 is ' + inp2);
    var temp;
    temp = inp2;
    inp2 = inp1;
    inp1 = temp;
    console.log('post swap:');
    console.log('inp1 is ' + inp1);
    console.log('inp2 is ' + inp2);
}

function swapInts(inp1,inp2){
    console.log('inp1 is ' + inp1);
    console.log('inp2 is ' + inp2);
    inp1=inp1*inp2;
    inp2=inp1/inp2;
    inp1=inp1/inp2;
    console.log('post swap:');
    console.log('inp1 is ' + inp1);
    console.log('inp2 is ' + inp2);
}

function swapStrings(inp1,inp2){
    console.log('inp1 is ' + inp1);
    console.log('inp2 is ' + inp2);
    var temp = inp1.concat(inp2);
    inp1=temp.replace(inp1,'');
    inp2=temp.replace(inp2,'');
    console.log('post swap:');
    console.log('inp1 is ' + inp1);
    console.log('inp2 is ' + inp2);

}

swapWithTemp(num1,num2);

console.log("\n");

swapWithTemp(str1,str2);

console.log("\n");

swapInts(num1,num2);

console.log("\n");

swapStrings(str1,str2);