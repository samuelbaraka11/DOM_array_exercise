const main = document.getElementById('add_car');
const addModelBtn = document.getElementById('model_name');
const availableModelsBtn = document.getElementById('available_models');
const sortBtn = document.getElementById('sort');
const calculatePowerBtn = document.getElementById('calculate_power');


let data = [];

//fetch random models and add power ratings

function getRandomModel() {
    fetch('https://api-ninjas.com/api/cars');

}