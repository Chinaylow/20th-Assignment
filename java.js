var msg = document.getElementById("msg");
function lovCalc(){
    var fName = prompt('Enter your name');
    var lName = prompt("Enter your lover's name");
    var xName = fName.slice(0,1);
    var yName = xName.toUpperCase();
    var zName = yName + fName.slice(1);
    var aName = lName.slice(0,1);
    var bName = aName.toUpperCase();
    var cName = bName + lName.slice(1);
    var love = Math.random();
    love = love * 100;
    love = Math.floor(love) + 1;
    var output = zName + " and " + cName + " are " + love + "% match!!!";
    // alert(output);
    return output;
}
var match = lovCalc();
msg.innerHTML = match;
// lovCalc();

// var txt = document.getElementById("txt");
// function lovCal(){
//     var wName = prompt('Enter your name');
//     var uName = prompt("Enter your lover's name");
   
//     var output2 = "It will not work 🤪 Take the first answer and go!!!";
//     return output2;
// }
// var musa = lovCal();
// txt.innerHTML = musa;