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
// var model = 'volkswagen'                                          
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });