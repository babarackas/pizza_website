var basicPizza = 10
var myArr = {
plain : 0,
gouda : 2,
cheddar : 3,
mozzarella : 1,
blue : 4,
feta : 2,
}

function totalPriceOutput(){
    var initVal = document.getElementById('myTextField').value;
    var lowercase = initVal.toLowerCase('myTextField');
    var output = document.getElementById('toppings');
    var array = lowercase.split(',');
   
var total = 0;
var i;

for (i=0; i<array.length; i++) {
array[i] = array[i].trim();
total = (+total) + (+myArr[array[i]]);
totalPrice = "Toppings Selected --- " + lowercase + " --- Total = $" + (total + basicPizza);
}
    
    output.innerHTML = "$" + (total + basicPizza);    
}

function myModalChange() {
document.getElementById("myVar").innerHTML = "Thanks for ordering! " + totalPrice;
}
var locations = [
    [
        "Tuscany Village Location 1 Km to Uvic",
        48.468868, 
        -123.331232
    ],
    [
    		"Fishermans Warf Location 9.1 Km to Uvic",
        48.422738, -123.383144
    ],
    [
    		"Mayfare Mall Location 5.2 Km to Uvic",
        48.447658, -123.369150
    ]
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(48.440911, -123.350674),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

 var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
