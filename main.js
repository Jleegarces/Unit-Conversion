let num = document.getElementById("placeholder").textContent = prompt("Enter a Number: ");


function length () {
  
  let meters = Math.round(num * 3.28);
  let feet = Math.round(num / 3.28);
  let sumLength = document.getElementById("lengthCon").textContent = `${num} meters = ${meters} feet | ${num} feet = ${feet} meters `;
};
length();

function volume () {
  let liters = Math.round(num * 0.26);
  let gallons = Math.round(num * 3.785);
  let sumVolume = document.getElementById("volCon").textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`
};
volume();

function mass () {
  let pounds = Math.round(num * 2.20462);
  let kilos = Math.round(num / 2.200462);
  let sumMass = document.getElementById("massCon").textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos `
};
mass()

