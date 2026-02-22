const clock = document.getElementById('clock')
console.log(clock);

setInterval(()=>{
    let now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
},1000);


console.log(now.getTime(),'mnmm');