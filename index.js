let input = document.getElementById("input");

function convert () {
let value = Number(input.value);
let meters = value;
document.getElementById("meters").innerHTML = `${ meters.toFixed(0)}`;
let feet = value * 3.28084;
document.getElementById("feet").innerHTML = `${ feet.toFixed(2)}`;
let liters = value;
document.getElementById("liters").innerHTML = `${ liters.toFixed(0)}`;
let gallons = value * 0.264172;
document.getElementById("gallons").innerHTML = `${ gallons.toFixed(2)}`;
let kilograms = value;
document.getElementById("kilograms").innerHTML = `${ kilograms.toFixed(0)}`;
let pounds = value * 2.20462;
document.getElementById("pounds").innerHTML = `${ pounds.toFixed(2)}`;
}
