'use strict';

var workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
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
            var cookieshour = Math.round(Math.floor(hourRandom * this.AvgCookieSale));
            this.Arr[i] = cookieshour;
            console.log(cookieshour);

        }
        console.log('Iam here now :', cookieshour);
    },
    render: function () {
        var textContent;
        var container = document.getElementById("salmonFish");
        var articleE = document.createElement('article');
        var h4 = document.createElement('h4');
        container.appendChild(h4);
        h4.textContent = ` ${this.locationName}`;
        container.appendChild(articleE);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for (var i = 0; i < workHours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${workHours[i]} : ${this.Arr[i]} cookies`;
        }
        liE1.textContent = `${this.Total()}`;
        console.log(container);
    },
    Total: function () {
        var sum = 0;
        for (var i = 0; i < workHours.length; i++) {
            sum = sum + this.Arr[i];
        }
        return ' Total :' + sum;

    }
}

Seattle.customerPerHour(23, 65);
console.log(Seattle);
console.log(Seattle.cookiesPurchasPerHour());
console.log('Location :' + Seattle.Location);
Seattle.render();


function getRandomNumber(min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}


var Tokyo = {
    locationName: 'Tokyo',
    MinCust: 3,
    MaxCust: 24,
    AvgCookieSale: 1.2,
    Arr: [],
    Customers: 0,
    count: 0,
    Location: ['Tokyo'],
    customerPerHour: function (min, max) {
        this.Customers = getRandomNumber(min, max);


    },
    cookiesPurchasPerHour: function () {
        for (var i = 0; i <= workHours.length; i++) {
            var hourRandom = Math.round(Math.floor(((Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust)));
            var cookieshour = Math.round(Math.floor(hourRandom * this.AvgCookieSale));
            this.Arr[i] = cookieshour;
            console.log(cookieshour);

        }
        console.log('Iam here now :', cookieshour);
    },
    render: function () {
        var textContent;
        var container = document.getElementById("salmonFish");
        var articleE = document.createElement('article');
        var h4 = document.createElement('h4');
        container.appendChild(h4);
        h4.textContent = ` ${this.locationName}`;
        container.appendChild(articleE);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for (var i = 0; i < workHours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${workHours[i]} : ${this.Arr[i]} cookies`;
        }
        liE1.textContent = `${this.Total()}`;
        console.log(container);
    },
    Total: function () {
        var sum = 0;
        for (var i = 0; i < workHours.length; i++) {
            sum = sum + this.Arr[i];
        }
        return ' Total :' + sum;

    }
}

Tokyo.customerPerHour(3, 24);
console.log(Tokyo);
console.log(Tokyo.cookiesPurchasPerHour());
console.log('Location :' + Tokyo.Location);
Tokyo.render();


function getRandomNumber(min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}

var Dubai = {
    locationName: 'Dubai',
    MinCust: 11,
    MaxCust: 38,
    AvgCookieSale: 3.7,
    Arr: [],
    Customers: 0,
    count: 0,
    Location: ['Dubai'],
    customerPerHour: function (min, max) {
        this.Customers = getRandomNumber(min, max);


    },
    cookiesPurchasPerHour: function () {
        for (var i = 0; i <= workHours.length; i++) {
            var hourRandom = Math.round(Math.floor(((Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust)));
            var cookieshour = Math.round(Math.floor(hourRandom * this.AvgCookieSale));
            this.Arr[i] = cookieshour;
            console.log(cookieshour);

        }
        console.log('Iam here now :', cookieshour);
    },
    render: function () {
        var textContent;
        var container = document.getElementById("salmonFish");
        var articleE = document.createElement('article');
        var h4 = document.createElement('h4');
        container.appendChild(h4);
        h4.textContent = ` ${this.locationName}`;
        container.appendChild(articleE);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for (var i = 0; i < workHours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${workHours[i]} : ${this.Arr[i]} cookies`;
        }
        liE1.textContent = `${this.Total()}`;
        console.log(container);
    },
    Total: function () {
        var sum = 0;
        for (var i = 0; i < workHours.length; i++) {
            sum = sum + this.Arr[i];
        }
        return ' Total :' + sum;

    }
}

Dubai.customerPerHour(11, 38);
console.log(Dubai);
console.log(Dubai.cookiesPurchasPerHour());
console.log('Location :' + Dubai.Location);
Dubai.render();


function getRandomNumber(min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}


var Paris = {
    locationName: 'Paris',
    MinCust: 20,
    MaxCust: 38,
    AvgCookieSale: 2.3,
    Arr: [],
    Customers: 0,
    count: 0,
    Location: ['Paris'],
    customerPerHour: function (min, max) {
        this.Customers = getRandomNumber(min, max);


    },
    cookiesPurchasPerHour: function () {
        for (var i = 0; i <= workHours.length; i++) {
            var hourRandom = Math.round(Math.floor(((Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust)));
            var cookieshour = Math.round(Math.floor(hourRandom * this.AvgCookieSale));
            this.Arr[i] = cookieshour;
            console.log(cookieshour);

        }
        console.log('Iam here now :', cookieshour);
    },
    render: function () {
        var textContent;
        var container = document.getElementById("salmonFish");
        var articleE = document.createElement('article');
        var h4 = document.createElement('h4');
        container.appendChild(h4);
        h4.textContent = ` ${this.locationName}`;
        container.appendChild(articleE);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for (var i = 0; i < workHours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${workHours[i]} : ${this.Arr[i]} cookies`;
        }
        liE1.textContent = `${this.Total()}`;
        console.log(container);
    },
    Total: function () {
        var sum = 0;
        for (var i = 0; i < workHours.length; i++) {
            sum = sum + this.Arr[i];
        }
        return ' Total :' + sum;

    }
}

Paris.customerPerHour(20, 38);
console.log(Paris);
console.log(Paris.cookiesPurchasPerHour());
console.log('Location :' + Paris.Location);
Paris.render();


function getRandomNumber(min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}

var Lima = {
    locationName: 'Lima',
    MinCust: 2,
    MaxCust: 16,
    AvgCookieSale: 4.6,
    Arr: [],
    Customers: 0,
    count: 0,
    Location: ['Lima'],
    customerPerHour: function (min, max) {
        this.Customers = getRandomNumber(min, max);


    },
    cookiesPurchasPerHour: function () {
        for (var i = 0; i <= workHours.length; i++) {
            var hourRandom = Math.round(Math.floor(((Math.random() * (this.MaxCust - this.MinCust)) + this.MinCust)));
            var cookieshour = Math.round(Math.floor(hourRandom * this.AvgCookieSale));
            this.Arr[i] = cookieshour;
            console.log(cookieshour);

        }
        console.log('Iam here now :', cookieshour);
    },
    render: function () {
        var textContent;
        var container = document.getElementById("salmonFish");
        var articleE = document.createElement('article');
        var h4 = document.createElement('h4');
        container.appendChild(h4);
        h4.textContent = ` ${this.locationName}`;
        container.appendChild(articleE);
        var ulE1 = document.createElement('ul');
        articleE.appendChild(ulE1);
        for (var i = 0; i < workHours.length; i++) {
            var liE1 = document.createElement('li');
            ulE1.appendChild(liE1);
            liE1.textContent = `${workHours[i]} : ${this.Arr[i]} cookies`;
        }
        liE1.textContent = `${this.Total()}`;
        console.log(container);
    },
    Total: function () {
        var sum = 0;
        for (var i = 0; i < workHours.length; i++) {
            sum = sum + this.Arr[i];
        }
        return ' Total :' + sum;

    }
}

Lima.customerPerHour(2, 16);
console.log(Lima);
console.log(Lima.cookiesPurchasPerHour());
console.log('Location :' + Lima.Location);
Lima.render();


function getRandomNumber(min, max) {
    var Cust = Math.floor(Math.random() * (max - min + 1) + min);
    return Cust;
}

