
let a = "123456789ABCDEF";

function colorgenerator(){
    let color = '#';
    for(let i=0; i<6; i++){
        color += a[Math.floor(Math.random() * 16)];
    }
    return color;
}

const startbtn = document.getElementsByClassName('start')[0]
const stopbtn = document.getElementsByClassName('stop')[0]

let inter;
startbtn.addEventListener('click', function(){

    if(inter == null){

        inter = setInterval(changebg,1000);
    }

    function changebg(){
        document.body.style.backgroundColor = colorgenerator();
    }
})

stopbtn.addEventListener('click', function(){
    clearInterval(inter);
    inter = null;
})
