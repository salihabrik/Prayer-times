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












/*let params = {
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


let params = {
    country : "dz",
    city: "constantine"
}

axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: params
  })
  .then(function (response) {
    const timings = response.data.data.timings
    fillTimeForPrayer(fajr-time, timings.Fajr)
    fillTimeForPrayer(sunrise-time, timings.Sunrise)

    fillTimeForPrayer(duhr-time, timings.Dhuhr)
    fillTimeForPrayer(asr-time, timings.Asr)
    fillTimeForPrayer(sunset-time, timings.Sunset)
    fillTimeForPrayer(icha-time, timings.Icha)
    document.getElementById("fajr-time").innerHtml = timing.Fajr
    console.log(response.data.data.timings.Fajr);
  })
  .catch(function (error) {
    console.log(error);
  
  });

  function fillTimeForPrayer(id, time)
  {
    document.getElementById("id").innerHtml = time
  }