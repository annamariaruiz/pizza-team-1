var c = document.getElementById("myCanvas");
var base = c.getContext("2d");
var pepperoni = c.getContext("2d");
var sausage = c.getContext("2d");
var ham = c.getContext("2d");
var chicken = c.getContext("2d");
var beef = c.getContext("2d");
var pork = c.getContext("2d");
var mushrooms = c.getContext("2d");
var onions = c.getContext("2d");
var olives = c.getContext("2d");
var pineapple = c.getContext("2d");

var getPizzaSize = 125;

function changePizzaSize(pizzaSize) {
    getPizzaSize = pizzaSize;
    base.clearRect(0, 0, myCanvas.width, myCanvas.height);
    base.fillStyle = '#C59E6B';
    base.beginPath();
    base.arc(225, 225, pizzaSize, 0, 2 * Math.PI);
    base.stroke();
    base.fill();
}


function addPepperoni(placePepperoni) {
    if (placePepperoni == 1) {
        base.fillStyle = '#aa4400';
        base.beginPath();
        base.arc(130, 265, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(170, 170, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
    }
    else if (placePepperoni == 2) {
        base.fillStyle = '#aa4400';
        base.beginPath();
        base.arc(130, 265, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(170, 170, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();

        base.beginPath();
        base.arc(280, 260, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(280, 150, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
    }
    else if (placePepperoni == 3) {
        base.fillStyle = '#aa4400';
        base.beginPath();
        base.arc(280, 260, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(280, 150, 20, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
    }
}


function addSausage(placeSausage) {

    if (placeSausage == 1) {
        base.fillStyle = '#764738';
        base.beginPath();
        base.arc(150, 200, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(200, 250, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
    }
    else if (placeSausage == 2) {
        base.fillStyle = '#764738';
        base.beginPath();
        base.arc(150, 200, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(200, 250, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(265, 200, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(290, 240, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
    }
    else if (placeSausage == 3) {
        base.fillStyle = '#764738';
        base.beginPath();
        base.arc(265, 200, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();

        base.beginPath();
        base.arc(290, 240, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
    }
}

function addHam(placeHam) {
    
    if (placeHam == 1) {
        base.fillStyle = '#DB9EA6';
        base.beginPath();
        base.rect(150, 130, 25, 25);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.rect(110, 200, 25, 25);
        base.stroke();
        base.fill();
    }
    else if (placeHam == 2) {
        base.fillStyle = '#DB9EA6';
        base.beginPath();
        base.rect(150, 130, 25, 25);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.rect(110, 200, 25, 25);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.rect(250, 280, 25, 25);
        base.stroke();
        base.fill();

        base.beginPath();
        base.rect(280, 200, 25, 25);
        base.stroke();
        base.fill();
    }
    else if (placeHam == 3) {
        base.fillStyle = '#DB9EA6';
        base.beginPath();
        base.rect(250, 280, 25, 25);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.rect(280, 200, 25, 25);
        base.stroke();
        base.fill();
    }
}

function addChicken(placeChicken) {

    if (placeChicken == 1) {
        base.fillStyle = '#c67d43';
        base.beginPath();
        base.arc(200, 150, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.arc(145, 285, 15, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
    }
    else if (placeChicken == 2) {
        base.fillStyle = '#c67d43';
        base.beginPath();
        base.rect(150, 130, 25, 25);
        base.stroke();
        base.fill();

        base.beginPath();
        base.rect(110, 200, 25, 25);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.rect(250, 280, 25, 25);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.rect(280, 200, 25, 25);
        base.stroke();
        base.fill();
    }
    else if (placeChicken == 3) {
        base.fillStyle = '#c67d43';
        base.beginPath();
        base.rect(250, 280, 25, 25);
        base.stroke();
        base.fill();
        
        base.beginPath();
        base.rect(280, 200, 25, 25);
        base.stroke();
        base.fill();
    }
}
function preMadePepperoni(){
    changePizzaSize(getPizzaSize);
    addPepperoni(2);
}
function preMadeHawaiian(){
    changePizzaSize(getPizzaSize);
    addPineapple(2);
    addHam(2);
}
function preMadeSupreme(){
    changePizzaSize(getPizzaSize);
    addPepperoni(2);
    addSausage(2);
    addOlive(2);
    addOnion(2);
}
function preMadeGreek(){
    changePizzaSize(getPizzaSize);
    addMushroom(2);
}
function preMadeNewYork(){
    changePizzaSize(getPizzaSize);
    
}
