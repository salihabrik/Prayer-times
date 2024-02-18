let params = {
    country: "dz",
    city: "constantine"
};

// Constructing the URL with query parameters
let url = new URL('http://api.aladhan.com/v1/timingsByCity');
url.search = new URLSearchParams(params).toString();

// Fetching data using the fetch API
fetch(url)
    .then(response => response.json())
    .then(data => {
        const timings = data.data.timings;

        fillTimeForPrayer("fajr-time", timings.Fajr);
        fillTimeForPrayer("sunrise-time", timings.Sunrise);
        fillTimeForPrayer("duhr-time", timings.Dhuhr);
        fillTimeForPrayer("asr-time", timings.Asr);
        fillTimeForPrayer("sunset-time", timings.Sunset);
        fillTimeForPrayer("icha-time", timings.Isha);

        console.log(data.data.timings);
    })
    .catch(error => {
        console.log(error);
    });

function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time;
}













let params = {
    country: "dz",
    city: "constantine"
};

// Constructing the URL with query parameters
const url = new URL('http://api.aladhan.com/v1/timingsByCity');
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

// Making the HTTP GET request using fetch
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })


    .catch(error => {
        console.error('Fetch Error:', error);
    });


"use strict";
const axios = require("axios");

let params = {
    country: "dz",
    city: "constantine"
};

axios.get("http://api.aladhan.com/v1/timingsByCity", {
    params: params
})
    .then(function (response) {
        const timings = response.data.data.timings;
        const fajrTime = document.getElementById("fajr-time");
        const sunriseTime = document.getElementById("sunrise-time");
        const duhrTime = document.getElementById("duhr-time");
        const asrTime = document.getElementById("asr-time");
        const sunsetTime = document.getElementById("sunset-time");
        const ichaTime = document.getElementById("icha-time");

        fajrTime.innerHTML = timings.Fajr;
        sunriseTime.innerHTML = timings.Sunrise;
        duhrTime.innerHTML = timings.Dhuhr;
        asrTime.innerHTML = timings.Asr;
        sunsetTime.innerHTML = timings.Sunset;
        ichaTime.innerHTML = timings.Isha;

        console.log(response.data.data.timings);
    })
    .catch(function (error) {
        console.log(error);
    });

function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time;
}

const readableDate = response.data.data.date.readableDate;
const weehDay = response.data.data.date.hijri.weekday.ar;*/


let cities =[
    "قسنطينة" , "عنابة" , "وهران"
]

for (let city of cities){
    const content = `
    <option>${city}</option>`
    document.getElementBuId("cities-select").innerHTML += content 
}
let params = {
    country: "dz",
    city: "constantine"
};

axios.get("http://api.aladhan.com/v1/timingsByCity", {
    params: params
})
    .then(function (response) {
        const timings = response.data.data.timings;
        const fajrTime = document.getElementById("fajr-time");
        const sunriseTime = document.getElementById("sunrise-time");
        const duhrTime = document.getElementById("duhr-time");
        const asrTime = document.getElementById("asr-time");
        const sunsetTime = document.getElementById("sunset-time");
        const ichaTime = document.getElementById("icha-time");

        fajrTime.innerHTML = timings.Fajr;
        sunriseTime.innerHTML = timings.Sunrise;
        duhrTime.innerHTML = timings.Dhuhr;
        asrTime.innerHTML = timings.Asr;
        sunsetTime.innerHTML = timings.Sunset;
        ichaTime.innerHTML = timings.Isha;

        console.log(response.data.data.timings);

        const readableDate = response.data.data.date.readable;
        const weekDay = response.data.data.date.hijri.weekday.ar;
        const date = readableDate + " " + weekDay
        document.getElementById("date").innerHTML = date

        connsole.log(weekDay + " " + readableDate)
    })
    .catch(function (error) {
        console.log(error);
    });

function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time;
}

//const readableDate = response.data.data.date.readable;
//const weekDay = response.data.data.date.hijri.weekday.ar;