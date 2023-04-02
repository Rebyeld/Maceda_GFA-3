var grassdice = Math.floor(Math.random() * 20);
var firedice = Math.floor(Math.random() * 20);
var waterdice = Math.floor(Math.random() * 20);

//Random numbers
document.getElementById("grassppl").innerHTML = grassdice;
document.getElementById("fireppl").innerHTML = firedice;
document.getElementById("waterppl").innerHTML = waterdice;

//Higehst number
if (grassdice>=firedice && grassdice>waterdice) {
    document.getElementById("Biggest").innerHTML = "The Grass and Fire starters with " + grassdice + " people each.";
}

if (grassdice>firedice && grassdice>=waterdice) {
    document.getElementById("Biggest").innerHTML = "The Grass and Water starters with " + grassdice + " people each.";
}

if (firedice>grassdice && firedice>=waterdice) {
    document.getElementById("Biggest").innerHTML = "The Fire and Water starters with " + grassdice + " people each.";
}

if (grassdice==firedice && grassdice==waterdice) {
    document.getElementById("Biggest").innerHTML = "The Grass, Fire and Water starters with " + grassdice + " people each.";
}
if (grassdice>firedice && grassdice>waterdice) {
    document.getElementById("Biggest").innerHTML = "The Grass starter with " + grassdice + " people.";
}

if (firedice>grassdice && firedice>waterdice) {
    document.getElementById("Biggest").innerHTML = "The Fire starter with " + firedice + " people.";
}

if (waterdice>firedice && waterdice>grassdice) {
    document.getElementById("Biggest").innerHTML = "The Water starter with " + waterdice + " people.";
}

//nth letter
var lttr = Math.floor(Math.random() * 27) + 1;
var alphab ="abcdefghijklmnopqrstuvwxyz";
var letter = alphab.slice(lttr - 1 , lttr);
document.getElementById("Randoletter").innerHTML = letter;
if (lttr == 1){
    document.getElementById("Randoletter").innerHTML = "a";
}

//hour and mins
var totalminutes = firedice * waterdice;
document.getElementById("totalmins").innerHTML = totalminutes + " (mins)"; 

var mandh = 60-totalminutes;
document.getElementById("minsandhrs").innerHTML = totalminutes + " (mins)";
if (totalminutes>60){
    document.getElementById("minsandhrs").innerHTML = " or 1hr " + (totalminutes - 60) + " mins";
}
if (totalminutes>120){
    document.getElementById("minsandhrs").innerHTML = " or 2hrs " + (totalminutes - 120) + " mins";
}
if (totalminutes>180){
    document.getElementById("minsandhrs").innerHTML = " or 3hrs " + (totalminutes - 180) + " mins";
}
if (totalminutes>240){
    document.getElementById("minsandhrs").innerHTML = " or 4hrs " + (totalminutes - 240) + " mins";
}
if (totalminutes>300){
    document.getElementById("minsandhrs").innerHTML = " or 5hrs " + (totalminutes - 300) + " mins";
}
if (totalminutes>360){
    document.getElementById("minsandhrs").innerHTML = " or 6hrs " + (totalminutes - 360) + " mins";
}