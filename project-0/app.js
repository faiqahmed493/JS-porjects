
function changer(color){

    document.body.style.backgroundColor = color;

    const box = document.getElementsByClassName('boxes');
    console.log(box);

    if(color === 'black'){

       document.body.style.color = 'white'; 

       if(box){
            for (const element of box) {
                if(element.id == color){
                    element.style.borderColor = 'white'; 
                }
            }
       }
    }
    else{
        
        document.body.style.color = 'black';
        
        if(box){
            if(box){
                for (const element of box) {
                        element.style.borderColor = 'black'; 
                }
            }
        }
    }
}