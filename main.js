let pressButtonChangeColor  = document.getElementById('button1');
let pressButtonAddLI  = document.getElementById('button2');

function changeColorFunc(){
    let h1 = document.body.querySelector("h1");
    h1.style.color = "red"
    h1.style.margin = 100
    console.log("addMargin")
};

function addRandomListItem(){
    let ul = document.getElementById('list1');
    let li = document.createElement("li");
    let children = ul.children.length + 1;
    li.setAttribute("id", "element"+children)
    li.appendChild(document.createTextNode("Element "+children));
    ul.appendChild(li)
    console.log("testAppendChild")
};




pressButtonChangeColor.onclick = changeColorFunc; 
pressButtonAddLI.onclick = addRandomListItem; 


