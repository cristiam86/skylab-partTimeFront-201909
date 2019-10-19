function numberHumanized(input){
    switch(input.substring(input.length-1,input.length)){
      case 1 : return input+'st'
        break;
      case 2 : return input+'nd'
        break;
      case 3 : return input+'rd'
        break;
      default : return input+'th'
        break;
    }
}