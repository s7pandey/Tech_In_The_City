var dark1 = document.getElementsByClassName("circle1");
var dark2 = document.getElementsByClassName("circle2");

function expand(elmnt){

}

function update_url(url) {
    document.location.href = url;
}


var count = 0
var personcount = 0
function add(){
  var elment = document.getElementById('time')
  var text = elment.innerText
  count = count + 30
  elment.innerHTML=count
}

function sub(){
  var elment = document.getElementById('time')
  var text = elment.innerText
  count = count - 30
  elment.innerHTML=count
}

function addperson(){
  var elment = document.getElementById('people')
  var text = elment.innerText
  personcount = personcount + 1
  elment.innerHTML = personcount
}

function removeperson(){
  var elment = document.getElementById('people')
  var text = elment.innerText
  personcount = personcount - 1
  elment.innerHTML = personcount
}