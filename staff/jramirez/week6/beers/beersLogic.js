
function getBeers(){
axios.get('https://api.punkapi.com/v2/beers?page=1')
  .then( response => {
    // handle success
    console.log(response.data[0].name);
    console.log(response.data);
    
    var list = document.getElementById("items");
    for (response.data.name in response.data){
        var listItem = document.createElement("article");
        listItem.textContent = response.data.name;
        list.appendChild(listItem);
    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
getBeers();

function $_id(id){
    return document.getElementById(id);
  }

  function $_class(className){
    return document.getElementsByClassName(className);
}
