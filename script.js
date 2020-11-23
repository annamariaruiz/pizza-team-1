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

function changePizzaSize(pizzaSize) {
    getPizzaSize = pizzaSize;
    base.clearRect(0, 0, myCanvas.width, myCanvas.height);
    base.fillStyle = '#C59E6B';
    base.beginPath();
    base.arc(225, 225, pizzaSize, 0, 2 * Math.PI);
    base.stroke();
    base.fill();
}

changePizzaSize(getPizzaSize);

var pepperoniImg = 'images/pepperoni.png';
var pepperoniObj = new Image();
pepperoniObj.src = pepperoniImg;

function addPepperoni(placePepperoni) {
    if (placePepperoni == 0){
        isPepperoni = false;
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placePepperoni == 1) {
        isPepperoni = true;
        ToppingCount++;
        updatePrice();
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 30, 50);
        pepperoni.drawImage(pepperoniObj, 35, 150);
    }
    else if (placePepperoni == 2) {
        isPepperoni = true;
        ToppingCount++;
        updatePrice();
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 30, 50);
        pepperoni.drawImage(pepperoniObj, 35, 150);

        pepperoni.drawImage(pepperoniObj, 150, 40);
        pepperoni.drawImage(pepperoniObj, 170, 90);
    }
    else if (placePepperoni == 3) {
        isPepperoni = true;
        ToppingCount++;
        updatePrice();
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 150, 40);
        pepperoni.drawImage(pepperoniObj, 170, 90);
    }
    else if (placePepperoni == 4) {
        if (isPepperoni == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placePepperoni == 5) {
        if (isPepperoni == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}

var sausageImg = 'images/sausage.png';
var sausageObj = new Image();
sausageObj.src = sausageImg;


function addSausage(placeSausage) {
    if (placeSausage == 0){
        isSausage = false;
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeSausage == 1) {
        isSausage = true;
        ToppingCount++;
        updatePrice();
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 60, 75);
        sausage.drawImage(sausageObj, 45, 175);
    }
    else if (placeSausage == 2) {
        isSausage = true;
        ToppingCount++;
        updatePrice();
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 60, 75);
        sausage.drawImage(sausageObj, 45, 175);

        sausage.drawImage(sausageObj, 200, 50);
        sausage.drawImage(sausageObj, 150, 70);
    }
    else if (placeSausage == 3) {
        isSausage = true;
        ToppingCount++;
        updatePrice();
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 200, 50);
        sausage.drawImage(sausageObj, 150, 70);
    }
    else if (placeSausage == 4) {
        if (isSausage == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placeSausage == 5) {
        if (isSausage == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}

var hamImg = 'images/ham.png';
var hamObj = new Image();
hamObj.src = hamImg;


function addHam(placeHam) {
    if (placeHam == 0){
        isHam = false;
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeHam == 1) {
        isHam = true;
        ToppingCount++;
        updatePrice();
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 50, 100);
        ham.drawImage(hamObj, 80, 175);
    }
    else if (placeHam == 2) {
        isHam = true;
        ToppingCount++;
        updatePrice();
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 50, 100);
        ham.drawImage(hamObj, 80, 175);

        ham.drawImage(hamObj, 180, 150);
        ham.drawImage(hamObj, 130, 120);
    }
    else if (placeHam == 3) {
        isHam = true;
        ToppingCount++;
        updatePrice();
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 180, 150);
        ham.drawImage(hamObj, 130, 120);

    }
    else if (placeHam == 4) {
        if (isHam == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placeHam == 5) {
        if (isHam == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}


var ChickenImg = 'images/chicken.png';
var chickenObj = new Image();
chickenObj.src = ChickenImg;


function addChicken(placechicken) {
    if (placechicken == 0){
        isChicken = false;
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placechicken == 1) {
        isChicken = true;
        ToppingCount++;
        updatePrice();
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 65, 40);
        chicken.drawImage(chickenObj, 60, 200);
    }
    else if (placechicken == 2) {
        isChicken = true;
        ToppingCount++;
        updatePrice();
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 65, 40);
        chicken.drawImage(chickenObj, 60, 200);

        chicken.drawImage(chickenObj, 150, 180);
        chicken.drawImage(chickenObj, 160, 120);
    }
    else if (placechicken == 3) {
        isChicken = true;
        ToppingCount++;
        updatePrice();
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 150, 180);
        chicken.drawImage(chickenObj, 160, 120);

    }
    else if (placechicken == 4) {
        if (isChicken == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placechicken == 5) {
        if (isChicken == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}


var beefImg = 'images/beef.png';
var beefObj = new Image();
beefObj.src = beefImg;


function addBeef(placeBeef) {
    if (placeBeef == 0){
        isBeef = false;
        ToppingCount++;
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeBeef == 1) {
        isBeef = true;
        ToppingCount++;
        updatePrice();
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 55, 28);
        beef.drawImage(beefObj, 15, 125);
    }
    else if (placeBeef == 2) {
        isBeef = true;
        ToppingCount++;
        updatePrice();
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 55, 28);
        beef.drawImage(beefObj, 15, 125);

        beef.drawImage(beefObj, 200, 180);
        beef.drawImage(beefObj, 210, 105);
    }
    else if (placeBeef == 3) {
        isBeef = true;
        ToppingCount++;
        updatePrice();
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 200, 180);
        beef.drawImage(beefObj, 210, 105);

    }
    else if (placeBeef == 4) {
        if (isBeef == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placeBeef == 5) {
        if (isBeef == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}


var porkImg = 'images/pork.png';
var porkObj = new Image();
porkObj.src = porkImg;


function addPork(placePork) {
    if (placePork == 0){
        isPork = false;
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placePork == 1) {
        isPork = true;
        ToppingCount++;
        updatePrice();
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 90, 45);
        pork.drawImage(porkObj, 10, 75);
    }
    else if (placePork == 2) {
        isPork = true;
        ToppingCount++;
        updatePrice();
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 90, 45);
        pork.drawImage(porkObj, 10, 75);

        pork.drawImage(porkObj, 160, 200);
        pork.drawImage(porkObj, 210, 140);
    }
    else if (placePork == 3) {
        isPork = true;
        ToppingCount++;
        updatePrice();

        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 160, 200);
        pork.drawImage(porkObj, 210, 140);

    }
    else if (placePork == 4) {
        if (isPork == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placePork == 5) {
        if (isPork == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}


var mushroomImg = 'images/mushroom.png';
var mushroomObj = new Image();
mushroomObj.src = mushroomImg;


function addMushroom(placeMushroom) {
    if (placeMushroom == 0){
        isMushroom = false;
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeMushroom == 1) {
        isMushroom = true;
        ToppingCount++;
        updatePrice();
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 90, 15);
        mushroom.drawImage(mushroomObj, 8, 100);
    }
    else if (placeMushroom == 2) {
        isMushroom = true;
        ToppingCount++;
        updatePrice();
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 90, 15);
        mushroom.drawImage(mushroomObj, 8, 100);

        mushroom.drawImage(mushroomObj, 140, 205);
        mushroom.drawImage(mushroomObj, 218, 115);
    }
    else if (placeMushroom == 3) {
        isMushroom = true;
        ToppingCount++;
        updatePrice();
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 140, 205);
        mushroom.drawImage(mushroomObj, 218, 115);

    }
    else if (placeMushroom == 4) {
        if (isMushroom == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placeMushroom == 5) {
        if (isMushroom == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}


var onionImg = 'images/onion.png';
var onionObj = new Image();
onionObj.src = onionImg;


function addOnion(placeOnion) {
    if (placeOnion == 0){
        isOnion = false;
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeOnion == 1) {
        isOnion = true;
        ToppingCount++;
        updatePrice();
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 90, 25);
        onion.drawImage(onionObj, 40, 120);
    }
    else if (placeOnion == 2) {
        isOnion = true;
        ToppingCount++;
        updatePrice();
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 90, 25);
        onion.drawImage(onionObj, 40, 120);

        onion.drawImage(onionObj, 125, 210);
        onion.drawImage(onionObj, 180, 120);
    }
    else if (placeOnion == 3) {
        isOnion = true;
        ToppingCount++;
        updatePrice();
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 125, 210);
        onion.drawImage(onionObj, 180, 120);

    }
    else if (placeOnion == 4) {
        if (isOnion == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placeOnion == 5) {
        if (isOnion == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}


var oliveImg = 'images/olive.png';
var oliveObj = new Image();
oliveObj.src = oliveImg;


function addOlive(placeOlive) {
    if (placeOlive == 0){
        isOlive = false;        
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeOlive == 1) {
        isOlive = true;        
        ToppingCount++;
        updatePrice();
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 90, 75);
        olive.drawImage(oliveObj, 55, 125);
    }
    else if (placeOlive == 2) {
        isOlive = true;        
        ToppingCount++;
        updatePrice();
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 90, 75);
        olive.drawImage(oliveObj, 55, 125);

        olive.drawImage(oliveObj, 110, 205);
        olive.drawImage(oliveObj, 140, 95);
    }
    else if (placeOlive == 3) {
        isOlive = true;        
        ToppingCount++;
        updatePrice();
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 110, 205);
        olive.drawImage(oliveObj, 140, 95);

    }
    else if (placeOlive == 4) {
        if (isOlive == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placeOlive == 5) {
        if (isOlive == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}


var pineappleImg = 'images/pineapple.png';
var pineappleObj = new Image();
pineappleObj.src = pineappleImg;


function addPineapple(placePineapple) {
    if (placePineapple == 0){
        isPineapple = false;        
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placePineapple == 1) {
        isPineapple = true;        
        ToppingCount++;
        updatePrice();
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 210, 135);
        pineapple.drawImage(pineappleObj, 190, 215);
    }
    else if (placePineapple == 2) {
        isPineapple = true;        
        ToppingCount++;
        updatePrice();
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 210, 135);
        pineapple.drawImage(pineappleObj, 190, 215);

        pineapple.drawImage(pineappleObj, 250, 100);
        pineapple.drawImage(pineappleObj, 230, 270);
    }
    else if (placePineapple == 3) {
        isPineapple = true;        
        ToppingCount++;
        updatePrice();
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 250, 100);
        pineapple.drawImage(pineappleObj, 230, 270);
    }
    else if (placePineapple == 4) {
        if (isPineapple == true) {
            ToppingCount++;
            updatePrice();
        }
    }
    else if (placePineapple == 5) {
        if (isPineapple == true) {
            ToppingCount++;
            updatePrice();        
        }
    }
}

function clearPizza(){

    pineapple.clearRect(0,0, myCanvas.width, myCanvas.height);
    pepperoni.clearRect(0,0, myCanvas.width, myCanvas.height);
    ham.clearRect(0,0, myCanvas.width, myCanvas.height);
    sausage.clearRect(0,0, myCanvas.width, myCanvas.height);
    onion.clearRect(0,0, myCanvas.width, myCanvas.height);
    mushroom.clearRect(0,0, myCanvas.width, myCanvas.height);
    beef.clearRect(0,0, myCanvas.width, myCanvas.height);
    chicken.clearRect(0,0, myCanvas.width, myCanvas.height);
    pork.clearRect(0,0, myCanvas.width, myCanvas.height);
    olive.clearRect(0,0, myCanvas.width, myCanvas.height);
    ToppingCount = 0;
    updatePrice();
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




//Pricing area


// Can select 'Double' or 'Extra' toppings that will each count as two toppings
// First topping is free, each after that is $1.00




//Constantly updates price display
function updatePrice(){
    let Pricing = ToppingCount;
    PriceDisplay = document.getElementById("priceDisplay");
    PriceDisplay.innerHTML = "$" + (Pricing-1) + ". 00";
    if(ToppingCount == 1){
        PriceDisplay.innerHTML = "$0.00";
    }
    else if(ToppingCount >= 5){
        var SpecialDealDisplay = document.getElementById("SpecialDeal");
        SpecialDealDisplay.style.display = "block";
        Pricing++;
    }
}

// ******************************UNIMPLIMENTED*************************************************************
// ******************************UNIMPLIMENTED*************************************************************
// ******************************UNIMPLIMENTED*************************************************************
// Five toppings is $3.00, each after that is still $1.00
// ******************************UNIMPLIMENTED*************************************************************


