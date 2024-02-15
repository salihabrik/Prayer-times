let params = {
    country : "dz",
    city: "constantine"
}

axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });