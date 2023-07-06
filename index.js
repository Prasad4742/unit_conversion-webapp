/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const feetToMeter = 1/3.281
const literToGallon =  0.264
const gallonToLiter = 1/0.264
const kiloToPound =  2.204
const poundToKilo = 1/2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    let first1 = (baseValue * meterToFeet).toFixed(3)
    let first2 = (baseValue * feetToMeter).toFixed(3)

    lengthEl.textContent = `${baseValue} meters = ${first1} feet | 
                            ${baseValue} feet =${first2} meters`
    })


convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value

    let second1 = (baseValue * literToGallon).toFixed(3)
    let second2 = (baseValue * gallonToLiter).toFixed(3)
    

    volumeEl.textContent = `${baseValue} liters = ${second1} gallons | 
                            ${baseValue} gallons =${second2} liters`
    })

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value

    let third1 = (baseValue * kiloToPound).toFixed(3)
    let third2 = (baseValue * poundToKilo).toFixed(3)
    

    massEl.textContent = `${baseValue} kilos = ${third1} pounds | 
                            ${baseValue} pounds =${third2} kilos`
    })