function getFullApiBeer() {
    const p = new Promise((resolve, reject) => {
        axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=80')
            .then(response => {
                console.log("AXIOS RESPONSE: ", response);

                const [beers] = response.data;
                if (beers.length < 1) {
                    reject('THERE IS NO BEERS');
                } else {
                    resolve({
                        response
                    })
                }
            });
    });
    return p;
}




const getFullApiBeerPromise = getFullApiBeer();
getFullApiBeerPromise.then(user => {
    const { data } = user.response;
    data.forEach((element, i) => {
        $('#beerFullContainer').append(`<div class='singleBeer' id='singleBeer${i}'>
        <div class='beerPhoto' style='background-image: url("${element.image_url}")'>
        </div><div class='beerName'>${element.name}</div>
        </div>`);

        $("#singleBeer" + i).click(function () {
            printBeerDetails(element);
        });
    });
})

function printBeerDetails(beer) {
    $('#beerFullContainer').append(`<div class='singleBeerDetails' id='singleBeerDetails'>
        <div class='closeIcon'>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
            <g>
                <path d="M28.2,24L47.1,5.1c1.2-1.2,1.2-3.1,0-4.2c-1.2-1.2-3.1-1.2-4.2,0L24,19.7L5.1,0.9c-1.2-1.2-3.1-1.2-4.2,0
                    c-1.2,1.2-1.2,3.1,0,4.2L19.7,24L0.9,42.8c-1.2,1.2-1.2,3.1,0,4.2C1.5,47.7,2.2,48,3,48s1.5-0.3,2.1-0.9L24,28.2l18.9,18.9
                    c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2L28.2,24z"/>
            </g>
            </svg>
        </div>
        <div class='singleBeerName'>${beer.name}</div>
        <div class='singleLine'>
            <div class='singleBeerImage' style='background-image: url("${beer.image_url}")'></div>
            <div class='singleBeerDescription'>${beer.description}</div>
        </div>
        <div class='singleBeertTagline'>${beer.tagline}</div>
        <div class='singleBeertFood_pairing'>This precious beer combines perfectly with:</div>
        <ul>
            <li>${beer.food_pairing[0]}</li>
            <li>${beer.food_pairing[1]}</li>
            <li>${beer.food_pairing[2]}</li>
        </ul>
        </div>`);
    $(".closeIcon").click(function () {
        closeprintBeerDetails();
    });
}

function closeprintBeerDetails() {
    $(".singleBeerDetails").remove();
}

