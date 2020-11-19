
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
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placePepperoni == 1) {
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 30, 50);
        pepperoni.drawImage(pepperoniObj, 35, 150);
    }
    else if (placePepperoni == 2) {
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 30, 50);
        pepperoni.drawImage(pepperoniObj, 35, 150);

        pepperoni.drawImage(pepperoniObj, 150, 40);
        pepperoni.drawImage(pepperoniObj, 170, 90);
    }
    else if (placePepperoni == 3) {
        pepperoni.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pepperoni.drawImage(pepperoniObj, 150, 40);
        pepperoni.drawImage(pepperoniObj, 170, 90);

    }
}

var sausageImg = 'images/sausage.png';
var sausageObj = new Image();
sausageObj.src = sausageImg;


function addSausage(placeSausage) {
    if (placeSausage == 0){
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeSausage == 1) {
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 60, 75);
        sausage.drawImage(sausageObj, 45, 175);
    }
    else if (placeSausage == 2) {
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 60, 75);
        sausage.drawImage(sausageObj, 45, 175);

        sausage.drawImage(sausageObj, 200, 50);
        sausage.drawImage(sausageObj, 150, 70);
    }
    else if (placeSausage == 3) {
        sausage.clearRect(0, 0, myCanvas.width, myCanvas.height);
        sausage.drawImage(sausageObj, 200, 50);
        sausage.drawImage(sausageObj, 150, 70);

    }
}

var hamImg = 'images/ham.png';
var hamObj = new Image();
hamObj.src = hamImg;


function addHam(placeHam) {
    if (placeHam == 0){
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeHam == 1) {
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 50, 100);
        ham.drawImage(hamObj, 80, 175);
    }
    else if (placeHam == 2) {
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 50, 100);
        ham.drawImage(hamObj, 80, 175);

        ham.drawImage(hamObj, 180, 150);
        ham.drawImage(hamObj, 130, 120);
    }
    else if (placeHam == 3) {
        ham.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ham.drawImage(hamObj, 180, 150);
        ham.drawImage(hamObj, 130, 120);

    }
}


var ChickenImg = 'images/chicken.png';
var chickenObj = new Image();
chickenObj.src = ChickenImg;


function addChicken(placechicken) {
    if (placechicken == 0){
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placechicken == 1) {
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 65, 40);
        chicken.drawImage(chickenObj, 60, 200);
    }
    else if (placechicken == 2) {
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 65, 40);
        chicken.drawImage(chickenObj, 60, 200);

        chicken.drawImage(chickenObj, 150, 180);
        chicken.drawImage(chickenObj, 160, 120);
    }
    else if (placechicken == 3) {
        chicken.clearRect(0, 0, myCanvas.width, myCanvas.height);
        chicken.drawImage(chickenObj, 150, 180);
        chicken.drawImage(chickenObj, 160, 120);

    }
}


var beefImg = 'images/beef.png';
var beefObj = new Image();
beefObj.src = beefImg;


function addBeef(placeBeef) {
    if (placeBeef == 0){
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeBeef == 1) {
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 55, 28);
        beef.drawImage(beefObj, 15, 125);
    }
    else if (placeBeef == 2) {
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 55, 28);
        beef.drawImage(beefObj, 15, 125);

        beef.drawImage(beefObj, 200, 180);
        beef.drawImage(beefObj, 210, 105);
    }
    else if (placeBeef == 3) {
        beef.clearRect(0, 0, myCanvas.width, myCanvas.height);
        beef.drawImage(beefObj, 200, 180);
        beef.drawImage(beefObj, 210, 105);

    }
}


var porkImg = 'images/pork.png';
var porkObj = new Image();
porkObj.src = porkImg;


function addPork(placePork) {
    if (placePork == 0){
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placePork == 1) {
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 90, 45);
        pork.drawImage(porkObj, 10, 75);
    }
    else if (placePork == 2) {
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 90, 45);
        pork.drawImage(porkObj, 10, 75);

        pork.drawImage(porkObj, 160, 200);
        pork.drawImage(porkObj, 210, 140);
    }
    else if (placePork == 3) {
        pork.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pork.drawImage(porkObj, 160, 200);
        pork.drawImage(porkObj, 210, 140);

    }
}


var mushroomImg = 'images/mushroom.png';
var mushroomObj = new Image();
mushroomObj.src = mushroomImg;


function addMushroom(placeMushroom) {
    if (placeMushroom == 0){
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeMushroom == 1) {
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 90, 15);
        mushroom.drawImage(mushroomObj, 8, 100);
    }
    else if (placeMushroom == 2) {
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 90, 15);
        mushroom.drawImage(mushroomObj, 8, 100);

        mushroom.drawImage(mushroomObj, 140, 205);
        mushroom.drawImage(mushroomObj, 218, 115);
    }
    else if (placeMushroom == 3) {
        mushroom.clearRect(0, 0, myCanvas.width, myCanvas.height);
        mushroom.drawImage(mushroomObj, 140, 205);
        mushroom.drawImage(mushroomObj, 218, 115);

    }
}


var onionImg = 'images/onion.png';
var onionObj = new Image();
onionObj.src = onionImg;


function addOnion(placeOnion) {
    if (placeOnion == 0){
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeOnion == 1) {
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 90, 25);
        onion.drawImage(onionObj, 40, 120);
    }
    else if (placeOnion == 2) {
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 90, 25);
        onion.drawImage(onionObj, 40, 120);

        onion.drawImage(onionObj, 125, 210);
        onion.drawImage(onionObj, 180, 120);
    }
    else if (placeOnion == 3) {
        onion.clearRect(0, 0, myCanvas.width, myCanvas.height);
        onion.drawImage(onionObj, 125, 210);
        onion.drawImage(onionObj, 180, 120);

    }
}


var oliveImg = 'images/olive.png';
var oliveObj = new Image();
oliveObj.src = oliveImg;


function addOlive(placeOlive) {
    if (placeOlive == 0){
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placeOlive == 1) {
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 90, 75);
        olive.drawImage(oliveObj, 55, 125);
    }
    else if (placeOlive == 2) {
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 90, 75);
        olive.drawImage(oliveObj, 55, 125);

        olive.drawImage(oliveObj, 110, 205);
        olive.drawImage(oliveObj, 140, 95);
    }
    else if (placeOlive == 3) {
        olive.clearRect(0, 0, myCanvas.width, myCanvas.height);
        olive.drawImage(oliveObj, 110, 205);
        olive.drawImage(oliveObj, 140, 95);

    }
}


var pineappleImg = 'images/pineapple.png';
var pineappleObj = new Image();
pineappleObj.src = pineappleImg;


function addPineapple(placePineapple) {
    if (placePineapple == 0){
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
    }
    else if (placePineapple == 1) {
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 210, 135);
        pineapple.drawImage(pineappleObj, 190, 215);
    }
    else if (placePineapple == 2) {
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 210, 135);
        pineapple.drawImage(pineappleObj, 190, 215);

        pineapple.drawImage(pineappleObj, 250, 100);
        pineapple.drawImage(pineappleObj, 230, 270);
    }
    else if (placePineapple == 3) {
        pineapple.clearRect(0, 0, myCanvas.width, myCanvas.height);
        pineapple.drawImage(pineappleObj, 250, 100);
        pineapple.drawImage(pineappleObj, 230, 270);

    }
}



