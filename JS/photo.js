function display(element){
    document.getElementById('image').innerHTML = element.alt;
  }
  function revert(){
    document.getElementById('image').innerHTML = "Hover over a sunsign image to display details.";
  }