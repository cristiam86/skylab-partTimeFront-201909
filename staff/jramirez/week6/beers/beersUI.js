
 
 $_id('beerTtl').innerHTML = response.data[0].name;


function $_id(id){
    return document.getElementById(id);
  }

  function $_class(className){
    return document.getElementsByClassName(className);
}
