

let num = parseInt(Math.random() * 100 + 1);

const form = document.getElementsByTagName('form');
const submitbtn = document.getElementById('sub-btn');
const resetbtn = document.getElementById('restart');
const inputField = form[0][0];

let arr = [];
let attempts = 7;

const res_display = document.getElementById('result');
const rem_att = document.getElementById('rem-attempts');

form[0].addEventListener('submit',(e) => {
    e.preventDefault();
    
    const userinput = parseInt(form[0][0].value);

    arr = [...arr,userinput];

    document.getElementById('prev-data').innerHTML = arr.join(',');


    attempts--;
    rem_att.innerHTML = attempts;

    if(userinput === num){
        res_display.innerHTML = 'Correct! You Win!';
        res_display.style.color = 'green';
        endGame();
    }
    else if(attempts == 0){
        res_display.innerHTML = `You Loss! The number was ${num}`;
        res_display.style.color = 'black';
        endGame();
    }
    else if(userinput < num){
        res_display.innerHTML = 'Too Low';
        res_display.style.color = 'red';
    }
    else{
        res_display.innerHTML = 'Too High';
        res_display.style.color = 'red';

    }

    inputField.value = '';


})

function endGame(){
    inputField.disabled = true;
    submitbtn.disabled = true;
}

resetbtn.addEventListener('click', () => {
    num = parseInt(Math.random() * 100 + 1);
    arr = [];
    attempts = 7;
    inputField.disabled = false;
    submitbtn.disabled = false;
    rem_att.innerHTML = 7;
    document.getElementById('prev-data').innerHTML = ' ';
    res_display.innerHTML = '';
    inputField.focus();
})