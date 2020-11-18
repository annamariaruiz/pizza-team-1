
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

    function changePizzaSize(pizzaSize) {
        base.clearRect(0, 0, myCanvas.width, myCanvas.height);    
        base.fillStyle = '#C59E6B';
        base.beginPath();
        base.arc(225, 225, pizzaSize, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        base.endPath();
    }