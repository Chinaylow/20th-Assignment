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
    if(love >= 90){
        var output = zName + " and " + cName + " are " + love + "% match!!! This one is match made in heaven👩‍❤️‍💋‍👨.";
    }
    if(love > 65 & love < 90 ){
        var output = zName + " and " + cName + " are " + love + "% match!!! You both are good to go.";
    }
    if(love >40 & love <= 65){
        output = zName + " and " + cName + " are " + love + "% match!!! " + cName + " is not for you sadly😔";
    }
    if(love >10 & love <=40){
        output = zName + " and " + cName + " are " + love + "% match!!! " + zName + " RUN for your life!!!";
    }
    if(love <=10){
        output = zName + " and " + cName + " are " + love + "% match!!! just forget about " + cName + " for your own good.";
    }

    // var output = zName + " and " + cName + " are " + love + "% match!!!";
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