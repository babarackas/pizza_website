var basicPizza = 10
var myArr =[["Gouda", 2],["Cheddar", 3],["Mozzarella", 1],["Blue", 4], ["Feta", 2]];

var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i][1];
}


var totalPrice = total + basicPizza;
console.log('The total cost is $' + totalPrice)

function thanks() {
    alert("Thanks for ordering!!");
} 
//display the result
    //var divobj = document.getElementById('calculateTotal');
    //divobj.style.display='block';
    //divobj.innerHTML = "Total Price For the Pizza $"+ calculateTotal;