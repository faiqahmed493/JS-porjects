
const form = document.getElementsByTagName('form');
console.log(form);


form[0].addEventListener('submit', function(e){
    e.preventDefault();

    const height = form[0][0].value;
    // console.log(height);
    const weight = form[0][1].value;
    // console.log(weight);

    const res = document.getElementById('result');

    if(isNaN(height) || isNaN(height) || height <= 0 || weight <= 0 ){
        res.innerHTML = "Please give valid value."
    }
    else{
        const bmi =  (weight/((height*height)/10000)).toFixed(2);
        res.innerHTML = bmi;
    }
    
});