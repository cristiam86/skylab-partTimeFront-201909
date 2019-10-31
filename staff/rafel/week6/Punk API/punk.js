
axios.get('https://api.punkapi.com/v2/beers')
    .then(function (response) {

        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
