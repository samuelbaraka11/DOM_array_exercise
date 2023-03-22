const main = document.getElementById('main');
const addUserBtn = document.getElementById('add_user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show_millionaires');
const sortBtn = document.getElementById('sort');
const calculatePowerBtn = document.getElementById('calculate_wealth');


let data = [];

//fetch random users and add money

function getRandomUser() {
    fetch('https://randomuser.me/api');

}
