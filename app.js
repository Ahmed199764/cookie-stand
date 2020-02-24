'use strict';

var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var sum = 0;
var Seattle = {
    locationName: 'Seattle',
    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    Arr: [],
    Customers: 0,
    count: 0,
    Location: ['Seattle'],
    customerPerHour: function (min, max) {
        this.Customers = getRandomNumber(min, max);
    },
    cookiesPurchasPerHour: function () {
        for (var i = 0; i <= workHours.length; i++) {
            var hourRandom = Math.round(Math.floor(((Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust)));
            var cookieshour = hourRandom * this.AvgCookieSale;
            this.Arr[i] = cookieshour;
            console.log(cookieshour);
        }
    },
    render: function () {
        var sum = this.Total.sum;
        var textContent;
        var container = document.getElementById("salmonFish");
        var articleE = document.createElement('article');
        container.appendChild(articleE);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for (var i = 0; i < workHours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${workHours[i]} : ${this.Arr[i]} cookies`;
        }
        liE1.textContent = `Total : ${this.Total.sum}`;
        console.log(container);
    },
    Total: function () {
        for (var i = 0; i < workHours.length; i++) {
            sum = sum + this.Arr[i];
        }
        console.log(' Total :' + sum);
    }
} 

Seattle.customerPerHour(23, 65);
console.log(Seattle);
console.log(Seattle.cookiesPurchasPerHour());
console.log('Location :' + Seattle.Location);
Seattle.render();
Seattle.Total();

function getRandomNumber(min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}

/*
var Tokyo = {
    LocationName : 'Tokyo',
    MinCust : 3,
    MaxCust : 24 ,
    AvgCookieSale : 1.2

}
console.log(Tokyo);


var Dubai = {
    LocationName : 'Dubai',
    MinCust : 11,
    MaxCust : 38 ,
    AvgCookieSale : 3.7

}
console.log(Dubai);


var Paris = {
    LocationName : 'Paris',
    MinCust : 20,
    MaxCust : 38 ,
    AvgCookieSale : 2.3

}
console.log(Paris);


var Lima = {
    LocationName : 'Lima',
    MinCust : 2,
    MaxCust : 16 ,
    AvgCookieSale : 4.6

}
console.log(Lima);
*/