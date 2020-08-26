function counting_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("countingten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("list of instruments").innerHTML = Content;
}

function game_Price() {
    const Gaming_Platform = {type:"console", brand:"playstation", color:"red"};
    Gaming_Platform.color = "black";
    Gaming_Platform.price = "$500";
    document.getElementById("gaming").innerHTML = "The cost of the " +
    Gaming_Platform.type + " was " + Gaming_Platform.price;

}


function keyword_Deal() {
  var carName = "Volvo";
  document.getElementById("keyword").innerHTML = typeof carName + " " + carName;
}

