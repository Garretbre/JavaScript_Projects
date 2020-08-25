function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Baas", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function constant_function() {
    const Gaming_Console = {type:"game console", brand:"Playstation", color:"white"};
    Gaming_Console.color = "black";
    Gaming_Console.price = "$500";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Gaming_Console.type + " was " + Gaming_Console.price;
}

var X = 45;
document.write(X);
{
    let X = 15;
    document.write("<br> + X");
}
document.write("<br>" + X);

var X = 45;
document.write(X);
{
    var X = 15;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function myFunction() {
    {return Math.PI;
}
document.getElementById("demo").innerHTML = myFunction();
}

let videogame = {
    make = "Ps4",
    model = "videogame",
    year = "2020",
    color = "blue",
    description : function() {
        return "The videogame is a " + this.year + this.color + this.make +this.model;
    }
};
document.getElementById("Video_Object").innerHTML = videogame.description();