console.log("beers")

//UI functions...

const get = (id) => {
    return document.getElementById(id);
}

const addBeer = (beer, where) => {
    const node = document.createElement("div");
    node.setAttribute("id", beer.id);
    const textnode = document.createTextNode(beer.name);
    node.appendChild(textnode);
    get(where).appendChild(node);
}

const buildBeerList = ()=>{
    axios.get('https://api.punkapi.com/v2/beers?page=1').then(response => {
        const beersObj = response;
        console.log(beersObj.data);
        beersObj.data.forEach(element => {
            addBeer(element,"list");           
        });
    })
}

buildBeerList();

// this approach using fetch also worked... but we prefer to use axios which is easier.

// const response = fetch('https://api.punkapi.com/v2/beers?page=1');
// const responseObj = response.then(function(resp) {
//     const json = resp.json(); //when then replies, make the json variable
//     console.log("Received first response :", response);
//     console.log("The type of the first response is: ", typeof(json));
//     return json;
// });
// const responseJson = responseObj.then(function(myJson) {
//     console.log("type of the second response is: ", typeof(myJson));
//     console.log("Received second response :", myJson);
//     for(let i in myJson){
//         addElement("div", myJson[i].name, "display"); 
//     }
// });
