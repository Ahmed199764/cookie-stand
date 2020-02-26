'use strict';

var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var Shop = [];
function Cookie(locationName, MinCust, MaxCust, AvgCookieSale, Location) {
    this.locationName = locationName;
    this.MinCust = MinCust;
    this.MaxCust = MaxCust;
    this.AvgCookieSale = AvgCookieSale;
    this.Location = Location;
    this.Arr = [];
    this.ArrTotal = [];
    this.Customers = 0;
    this.count = 0;
    this.totalCookies = 0;
    Shop.push(this);
}

Cookie.prototype.customerPerHour = function (min, max) {
    this.Customers = this.getRandomNumber(min, max);
}

Cookie.prototype.cookiesPurchasPerHour = function () {
    for (var i = 0; i <= workHours.length; i++) {
        var hourRandom = Math.round(Math.floor(((Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust)));
        var cookieshour = Math.round(Math.floor(hourRandom * this.AvgCookieSale));
        this.Arr[i] = cookieshour;

    }
}

Cookie.prototype.Total = function () {
    var sum = 0;
    for (var i = 0; i < workHours.length; i++) {
        sum = sum + this.Arr[i];
    }
    return this.totalCookies = sum;
}

Cookie.prototype.getRandomNumber = function (min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}

var allLocation = ['Scattl', 'Tokyo', 'Dubai', 'Paris', 'Lima'];
Cookie.prototype.getAllLocationTotalSameTime = function () {
}

var myLocationTable = document.getElementById('salmonFish');

Cookie.prototype.newRenderHeader = function () {
    var table = document.createElement('table');
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    for (var i = 0; i < workHours.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = workHours[i]+ "~" ;
        trEl.appendChild(thEl);
    };
    var thE2 = document.createElement('th');
    thE2 = document.createElement('th');
    thE2.textContent = 'Daily Location Total';
    trEl.appendChild(thE2);
    table.appendChild(trEl);
    myLocationTable.appendChild(trEl);
}

Cookie.prototype.newRenderContain = function () {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);

    for (var i = 0; i < workHours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.Arr[i];
        trEl.appendChild(tdEl);
    }


    tdEl = document.createElement('td');
    tdEl.textContent = this.Total();
    trEl.appendChild(tdEl);
    myLocationTable.appendChild(trEl);
};

Cookie.prototype.newRenderFooter = function () {
    var trE2 = document.createElement('tr');
    var tdE2 = document.createElement('td');
    tdE2.textContent = "Totals";
    trE2.appendChild(tdE2);

    var y = 0;
    for (var i = 0; i < workHours.length; i++) {
        tdE2 = document.createElement('td');
        trE2.appendChild(tdE2);
        var x = 0;
        for (var j = 0; j <=4; j++) {
            x += Shop[j].Arr[y];
            tdE2.textContent = x;
        }
        y += 1; 
    }
    var result = Shop[0].totalCookies+Shop[1].totalCookies+Shop[2].totalCookies+Shop[3].totalCookies+Shop[4].totalCookies;
    var tdE2 = document.createElement('td');
    tdE2.textContent=result;
    trE2.appendChild(tdE2);
    myLocationTable.appendChild(trE2);
};

Cookie.prototype.deleteRow = function (){
  var parentTableEl = document.getElementById('table');
  var childTableRowEl = document.getElementById(this.locationName);
  parentTableEl.removeChild(childTableRowEl);
}

var Seattle = new Cookie('Seattle', 23, 65, 6.3, 'Seattle');
var Tokyo = new Cookie('Tokyo', 3, 24, 1.2, 'Tokyo');
var Dubai = new Cookie('Dubai', 11, 38, 3.7, 'Dubai');
var Paris = new Cookie('Paris', 20, 38, 2.3, 'Paris');
var Lima = new Cookie('Lima', 2, 16, 4.6, 'Lima');

var myForm = document.getElementById('SalmonForm');
myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  var locationName = event.target.locationName.value;
  console.log(locationName);
  var MinCust = parseInt(event.target.MinCust.value);
  console.log(MinCust);
  var MaxCust = parseInt(event.target.MaxCust.value);
  console.log(MaxCust);
  var AvgCookieSale = parseFloat(event.target.AvgCookieSale.value);
  console.log(AvgCookieSale);

//    if(Shop.Cookie = event.target.locationName.value){
//     alert('sorry ,you cant repeat same data');
// }

  if (!event.target.locationName.value || !event.target.MinCust.value || !event.target.MaxCust.value || !event.target.AvgCookieSale.value) {
    return alert('Please , you forget to fill something.');
}

if (event.target.MinCust.value < 0 || event.target.MaxCust.value < 0 || event.target.AvgCookieSale.value < 0) {
    return alert('Stop give me nigtive values');
}

if (event.target.MinCust.value > event.target.MaxCust.value) {
    return alert('Thats not allowed , max cust should be greater than min cust');
}
 
  var SalmonObj = new Cookie(locationName,MinCust,MaxCust,AvgCookieSale);
  
  SalmonObj.cookiesPurchasPerHour();
  SalmonObj.getAllLocationTotalSameTime();
  SalmonObj.newRenderContain();
  myForm.reset();
})

// Cookie.prototype.intoRander = function () {
// }
// myLocationTable.appendChild(trEl);

Shop[0].newRenderHeader();
for (var i = 0; i < Shop.length; i++) {
    Shop[i].cookiesPurchasPerHour();
    Shop[i].newRenderContain();
    Shop[i].getAllLocationTotalSameTime()
}
Shop[1].newRenderFooter();


