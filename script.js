
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

    function makeSmall() {
        base.clearRect(0, 0, myCanvas.width, myCanvas.height);    
        base.fillStyle = '#C59E6B';
        base.beginPath();
        base.arc(225, 225, 125, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        base.endPath();
    }

    function makeMedium() {
        base.clearRect(0, 0, myCanvas.width, myCanvas.height);    
        base.fillStyle = '#C59E6B';
        base.beginPath();
        base.arc(225, 225, 150, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        base.endPath();
    }

    function makeLarge() {
        base.clearRect(0, 0, myCanvas.width, myCanvas.height);    
        base.fillStyle = '#C59E6B';
        base.beginPath();
        base.arc(225, 225, 175, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        base.endPath();
    }

    function makeXLarge() {
        base.clearRect(0, 0, myCanvas.width, myCanvas.height);    
        base.fillStyle = '#C59E6B';
        base.beginPath();
        base.arc(225, 225, 200, 0, 2 * Math.PI);
        base.stroke();
        base.fill();
        base.endPath();
    }