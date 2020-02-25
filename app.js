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
    this.ArrTotal =[];
    this.Customers = 0;
    this.count = 0;
    this.totalCookies =0;
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
    return this.totalCookies =  sum;
}

Cookie.prototype.getRandomNumber = function (min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}

var allLocation = ['Scattl','Tokyo','Dubai','Paris','Lima'];
Cookie.prototype.getAllLocationTotalSameTime = function (){
  }

var myLocationTable = document.getElementById('salmonFish');

Cookie.prototype.newRenderHeader = function () {
    var table = document.createElement(table);
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    trEl.appendChild(thEl);
    for (var i = 0; i < workHours.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = workHours[i];
        trEl.appendChild(thEl);
    };
    var thE2 = document.createElement('th');
    thE2 = document.createElement('th');
    thE2.textContent = 'Daily Location Total';
    trEl.appendChild(thE2);
    myLocationTable.appendChild(trEl);
}

Cookie.prototype.newRenderContain = function () {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);
  
    for (var i = 0; i < workHours.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.Arr[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.Total();
    trEl.appendChild(tdEl);
    myLocationTable.appendChild(trEl);
  };

  Cookie.prototype.newRenderFooter= function () {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = "Totals";
    trEl.appendChild(tdEl);

    var y=0;  
    for (var i = 0; i < workHours.length; i++){
      tdEl = document.createElement('td');
      trEl.appendChild(tdEl);
      var x=0;
      for(var j =0; j<=4;j++){
        x+=Shop[j].Arr[y];
        tdEl.textContent =x;
    }
        y+=1;
    }
    
    // tdEl = document.createElement('td');
    // var s=0;
    // for (var q=0;q<=4;q++){
    //     s+=Shop[q].this.sum;
    // }
    // tdEl.textContent = s;
    // trEl.appendChild(tdEl);
     myLocationTable.appendChild(trEl);
  };

var Seattle = new Cookie('Seattle', 23, 65, 6.3, 'Seattle');
var Tokyo = new Cookie('Tokyo', 3, 24, 1.2, 'Tokyo');
var Dubai = new Cookie('Dubai', 11, 38, 3.7, 'Dubai');
var Paris = new Cookie('Paris', 20, 38, 2.3, 'Paris');
var Lima = new Cookie('Lima', 2, 16, 4.6, 'Lima');

Shop[0].newRenderHeader();
for (var i = 0; i < Shop.length; i++) {
    Shop[i].cookiesPurchasPerHour();
    Shop[i].newRenderContain();
    Shop[i].getAllLocationTotalSameTime();
    
}
Shop[3].newRenderFooter();
