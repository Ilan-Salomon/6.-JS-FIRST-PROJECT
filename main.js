let pressButtonChangeColor  = document.body.querySelector('button');

function changeColorFunc(){
    let h1ToTurnRed = document.body.querySelector("h1");
    h1ToTurnRed.style.color = "red"

};

pressButtonChangeColor.onclick = changeColorFunc; 


