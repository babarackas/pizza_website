var input = document.getElementById('topping').value;

var basicPizza = 10
var myArr = {
Gouda : 2,
Cheddar : 3,
Mozzarella : 1,
Blue : 4,
Feta : 2,
}
var total = 0
var i;
for (i=0; i<myArr.length; i++) {
total = (+total) + (+input[myArr[1]]);
}

var totalPrice = total + basicPizza;

function thanks() {
var a = document.getElementById('topping');
alert("Thanks for ordering! Your total cost is $"+ totalPrice);
}
