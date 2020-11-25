let ToppingCount = 0; 


var c = document.getElementById("myCanvas");
var d = document.getElementById("myCanvas2");
var e = document.getElementById("myCanvas3");
var f = document.getElementById("myCanvas4");
var g = document.getElementById("myCanvas5");
var h = document.getElementById("myCanvas6");
var i = document.getElementById("myCanvas7");
var j = document.getElementById("myCanvas8");
var k = document.getElementById("myCanvas9");
var l = document.getElementById("myCanvas10");
var m = document.getElementById("myCanvas11");
var toppingList = document.getElementById("currentToppings")



var base = c.getContext("2d");
var pepperoni = d.getContext("2d");
var sausage = e.getContext("2d");
var ham = f.getContext("2d");
var chicken = g.getContext("2d");
var beef = h.getContext("2d");
var pork = i.getContext("2d");
var mushroom = j.getContext("2d");
var onion = k.getContext("2d");
var olive = l.getContext("2d");
var pineapple = m.getContext("2d");

var isPepperoni = new Boolean(false);
var isSausage = new Boolean(false);
var isHam = new Boolean(false);
var isChicken = new Boolean(false);
var isBeef = new Boolean(false);
var isPork = new Boolean(false);
var isMushroom = new Boolean(false);
var isOnion = new Boolean(false);
var isOlive = new Boolean(false);
var isPineapple = new Boolean(false);

var getPizzaSize = 125;
var numToppings = 0;

function changePizzaSize(pizzaSize) {
    getPizzaSize = pizzaSize;
    base.clearRect(0, 0, myCanvas.width, myCanvas.height);
    base.fillStyle = '#C59E6B';
    base.beginPath();
    base.arc(225, 225, pizzaSize, 0, 2 * Math.PI);
    base.stroke();
    base.fill();
    getPrice();        
}

changePizzaSize(getPizzaSize);

var pepperoniImg = 'images/pepperoni.png';
var pepperoniObj = new Image();
pepperoniObj.src = pepperoniImg;

function addPepperoni(placePepperoni) {
    if(isPepperoni == false) {
        isPepperoni = true;
        numToppings++;
    }
    if (placePepperoni == 0){
        isPepperoni = false;
        numToppings--;
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placePepperoni == 1) {
        getPrice();
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 30, 50);
        pepperoni.drawImage(pepperoniObj, 35, 150);
    }
    else if (placePepperoni == 2) {
        getPrice();
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 30, 50);
        pepperoni.drawImage(pepperoniObj, 35, 150);

        pepperoni.drawImage(pepperoniObj, 150, 40);
        pepperoni.drawImage(pepperoniObj, 170, 90);
    }
    else if (placePepperoni == 3) {
        getPrice();
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 150, 40);
        pepperoni.drawImage(pepperoniObj, 170, 90);
    }
    else if (placePepperoni == 4) {
        if (isPepperoni == true) {
            getPrice();
        }
    }
    else if (placePepperoni == 5) {
        if (isPepperoni == true) {
            getPrice();
        }
    }
}

var sausageImg = 'images/sausage.png';
var sausageObj = new Image();
sausageObj.src = sausageImg;


function addSausage(placeSausage) {
    if(isSausage == false) {
        isSausage = true;
        numToppings++;
    }
    if (placeSausage == 0){
        isSausage = false;
        numToppings--;
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placeSausage == 1) {
        getPrice();
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 60, 75);
        sausage.drawImage(sausageObj, 45, 175);
    }
    else if (placeSausage == 2) {
        getPrice();
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 60, 75);
        sausage.drawImage(sausageObj, 45, 175);

        sausage.drawImage(sausageObj, 200, 50);
        sausage.drawImage(sausageObj, 150, 70);
    }
    else if (placeSausage == 3) {
        getPrice();
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 200, 50);
        sausage.drawImage(sausageObj, 150, 70);
    }
    else if (placeSausage == 4) {
        if (isSausage == true) {
            getPrice();
        }
    }
    else if (placeSausage == 5) {
        if (isSausage == true) {
            getPrice();        
        }
    }
}

var hamImg = 'images/ham.png';
var hamObj = new Image();
hamObj.src = hamImg;


function addHam(placeHam) {
    if(isHam == false) {
        isHam = true;
        numToppings++;
    }
    if (placeHam == 0){
        isHam = false;
        numToppings--;
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placeHam == 1) {
        getPrice();
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 50, 100);
        ham.drawImage(hamObj, 80, 175);
    }
    else if (placeHam == 2) {
        getPrice();
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 50, 100);
        ham.drawImage(hamObj, 80, 175);

        ham.drawImage(hamObj, 180, 150);
        ham.drawImage(hamObj, 130, 120);
    }
    else if (placeHam == 3) {
        getPrice();
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 180, 150);
        ham.drawImage(hamObj, 130, 120);

    }
    else if (placeHam == 4) {
        if (isHam == true) {
            getPrice();
        }
    }
    else if (placeHam == 5) {
        if (isHam == true) {
            getPrice();        
        }
    }
}


var ChickenImg = 'images/chicken.png';
var chickenObj = new Image();
chickenObj.src = ChickenImg;


function addChicken(placechicken) {
    if(isChicken == false) {
        isChicken = true;
        numToppings++;
    }
    if (placechicken == 0){
        isChicken = false;
        numToppings--;
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placechicken == 1) {
        getPrice();
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 65, 40);
        chicken.drawImage(chickenObj, 60, 200);
    }
    else if (placechicken == 2) {
        getPrice();
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 65, 40);
        chicken.drawImage(chickenObj, 60, 200);

        chicken.drawImage(chickenObj, 150, 180);
        chicken.drawImage(chickenObj, 160, 120);
    }
    else if (placechicken == 3) {
        getPrice();
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 150, 180);
        chicken.drawImage(chickenObj, 160, 120);

    }
    else if (placechicken == 4) {
        if (isChicken == true) {
            getPrice();
        }
    }
    else if (placechicken == 5) {
        if (isChicken == true) {
            getPrice();        
        }
    }
}


var beefImg = 'images/beef.png';
var beefObj = new Image();
beefObj.src = beefImg;


function addBeef(placeBeef) {
    if(isBeef == false) {
        isBeef = true;
        numToppings++;
    }
    if (placeBeef == 0){
        isBeef = false;
        numToppings--;
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placeBeef == 1) {
        getPrice();
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 55, 28);
        beef.drawImage(beefObj, 15, 125);
    }
    else if (placeBeef == 2) {
        getPrice();
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 55, 28);
        beef.drawImage(beefObj, 15, 125);

        beef.drawImage(beefObj, 200, 180);
        beef.drawImage(beefObj, 210, 105);
    }
    else if (placeBeef == 3) {
        getPrice();
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 200, 180);
        beef.drawImage(beefObj, 210, 105);

    }
    else if (placeBeef == 4) {
        if (isBeef == true) {
            getPrice();
        }
    }
    else if (placeBeef == 5) {
        if (isBeef == true) {
            getPrice();        
        }
    }
}


var porkImg = 'images/pork.png';
var porkObj = new Image();
porkObj.src = porkImg;


function addPork(placePork) {
    if(isPork == false) {
        isPork = true;
        numToppings++;
    }
    if (placePork == 0){
        isPork = false;
        numToppings--;
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placePork == 1) {
        getPrice();
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 90, 45);
        pork.drawImage(porkObj, 10, 75);
    }
    else if (placePork == 2) {
        getPrice();
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 90, 45);
        pork.drawImage(porkObj, 10, 75);

        pork.drawImage(porkObj, 160, 200);
        pork.drawImage(porkObj, 210, 140);
    }
    else if (placePork == 3) {
        getPrice();

        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 160, 200);
        pork.drawImage(porkObj, 210, 140);

    }
    else if (placePork == 4) {
        if (isPork == true) {
            getPrice();
        }
    }
    else if (placePork == 5) {
        if (isPork == true) {
            getPrice();        
        }
    }
}


var mushroomImg = 'images/mushroom.png';
var mushroomObj = new Image();
mushroomObj.src = mushroomImg;


function addMushroom(placeMushroom) {
    if(isMushroom == false) {
        isMushroom = true;
        numToppings++;
    }
    if (placeMushroom == 0){
        isMushroom = false;
        numToppings--;
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placeMushroom == 1) {
        getPrice();
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 90, 15);
        mushroom.drawImage(mushroomObj, 8, 100);
    }
    else if (placeMushroom == 2) {
        getPrice();
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 90, 15);
        mushroom.drawImage(mushroomObj, 8, 100);

        mushroom.drawImage(mushroomObj, 140, 205);
        mushroom.drawImage(mushroomObj, 218, 115);
    }
    else if (placeMushroom == 3) {
        getPrice();
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 140, 205);
        mushroom.drawImage(mushroomObj, 218, 115);

    }
    else if (placeMushroom == 4) {
        if (isMushroom == true) {
            getPrice();
        }
    }
    else if (placeMushroom == 5) {
        if (isMushroom == true) {
            getPrice();        
        }
    }
}


var onionImg = 'images/onion.png';
var onionObj = new Image();
onionObj.src = onionImg;


function addOnion(placeOnion) {
    if(isOnion == false) {
        isOnion = true;
        numToppings++;
    }
    if (placeOnion == 0){
        isOnion = false;
        numToppings--;
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placeOnion == 1) {
        getPrice();
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 90, 25);
        onion.drawImage(onionObj, 40, 120);
    }
    else if (placeOnion == 2) {
        getPrice();
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 90, 25);
        onion.drawImage(onionObj, 40, 120);

        onion.drawImage(onionObj, 125, 210);
        onion.drawImage(onionObj, 180, 120);
    }
    else if (placeOnion == 3) {
        getPrice();
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 125, 210);
        onion.drawImage(onionObj, 180, 120);

    }
    else if (placeOnion == 4) {
        if (isOnion == true) {
            getPrice();
        }
    }
    else if (placeOnion == 5) {
        if (isOnion == true) {
            getPrice();        
        }
    }
}


var oliveImg = 'images/olive.png';
var oliveObj = new Image();
oliveObj.src = oliveImg;


function addOlive(placeOlive) {
    if(isOlive == false) {
        isOlive = true;
        numToppings++;
    }
    if (placeOlive == 0){
        isOlive = false;   
        numToppings--;     
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placeOlive == 1) {
        getPrice();
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 90, 75);
        olive.drawImage(oliveObj, 55, 125);
    }
    else if (placeOlive == 2) {
        getPrice();
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 90, 75);
        olive.drawImage(oliveObj, 55, 125);

        olive.drawImage(oliveObj, 110, 205);
        olive.drawImage(oliveObj, 140, 95);
    }
    else if (placeOlive == 3) {
        getPrice();
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 110, 205);
        olive.drawImage(oliveObj, 140, 95);

    }
    else if (placeOlive == 4) {
        if (isOlive == true) {
            getPrice();
        }
    }
    else if (placeOlive == 5) {
        if (isOlive == true) {
            getPrice();        
        }
    }
}


var pineappleImg = 'images/pineapple.png';
var pineappleObj = new Image();
pineappleObj.src = pineappleImg;


function addPineapple(placePineapple) {
    if(isPineapple == false) {
        isPineapple = true;
        numToppings++;
    }
    if (placePineapple == 0){
        isPineapple = false;   
        numToppings--;     
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        getPrice();
    }
    else if (placePineapple == 1) {
        getPrice();
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 210, 135);
        pineapple.drawImage(pineappleObj, 190, 215);
    }
    else if (placePineapple == 2) {
        getPrice();
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 210, 135);
        pineapple.drawImage(pineappleObj, 190, 215);

        pineapple.drawImage(pineappleObj, 250, 100);
        pineapple.drawImage(pineappleObj, 230, 270);
    }
    else if (placePineapple == 3) {
        getPrice();
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 250, 100);
        pineapple.drawImage(pineappleObj, 230, 270);
    }
    else if (placePineapple == 4) {
        if (isPineapple == true) {
            getPrice();
        }
    }
    else if (placePineapple == 5) {
        if (isPineapple == true) {
            getPrice();        
        }
    }
}

function clearPizza(){

    pineapple.clearRect(0,0, myCanvas.width, myCanvas.height);
    isPineapple = false;
    pepperoni.clearRect(0,0, myCanvas.width, myCanvas.height);
    isPepperoni = false;
    ham.clearRect(0,0, myCanvas.width, myCanvas.height);
    isHam = false;
    sausage.clearRect(0,0, myCanvas.width, myCanvas.height);
    isSausage = false;
    onion.clearRect(0,0, myCanvas.width, myCanvas.height);
    isOnion = false;
    mushroom.clearRect(0,0, myCanvas.width, myCanvas.height);
    isMushroom = false;
    beef.clearRect(0,0, myCanvas.width, myCanvas.height);
    isBeef = false;
    chicken.clearRect(0,0, myCanvas.width, myCanvas.height);
    isChicken = false;
    pork.clearRect(0,0, myCanvas.width, myCanvas.height);
    isPork = false;
    olive.clearRect(0,0, myCanvas.width, myCanvas.height);
    isOlive = false;
    numToppings = 0;
    getPrice();
}

function preMadePepperoni(){
    changePizzaSize(getPizzaSize);
    clearPizza();
    addPepperoni(2);
}

function preMadeHawaiian(){
    changePizzaSize(getPizzaSize);
    clearPizza();
    addPineapple(2);
    addHam(2);
}

function preMadeSupreme(){
    changePizzaSize(getPizzaSize);
    clearPizza();
    addPepperoni(2);
    addSausage(2);
    addOlive(2);
    addOnion(2);
    addMushroom(2);
}

function preMadeMeatLovers(){
    changePizzaSize(getPizzaSize);
    clearPizza();
    addPepperoni(2);
    addHam(2);
    addPork(2);
    addSausage(2);
}

function preMadeVeggie(){
    changePizzaSize(getPizzaSize);
    clearPizza();
    addOlive(2);
    addMushroom(2);
    addPineapple(2);
    addOnion(2);
}

function getPrice() {
    var baseCost = 6;
    if(getPizzaSize == 125) {
        var baseCost = 7;
    }
    else if(getPizzaSize == 150) {
        var baseCost = 8;
    }
    else if(getPizzaSize == 175) {
        var baseCost = 9;
    }
    else if(getPizzaSize == 200) {
        var baseCost = 10;
    }

    PriceDisplay = document.getElementById("priceDisplay");
    if(numToppings == 0 || numToppings == 1) {
        PriceDisplay.innerHTML = "$" + (baseCost) + ".00";
    }
    else if(numToppings == 2 || numToppings == 3 || numToppings == 4) {
        PriceDisplay.innerHTML = "$" + (baseCost + numToppings-1) + ".00";
    }
    else if(numToppings == 5) {
        PriceDisplay.innerHTML = "$" + (baseCost + 3) + ".00";
    }
    else if(numToppings > 5) {
        PriceDisplay.innerHTML = "$" + (baseCost + numToppings-2) + ".00";
    }
}