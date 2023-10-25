console.log('Js loaded')

var countdownelement = document.getElementById('countdown');

var iniitialcountdownVal = countdownelement.innerHTML;

setInterval(function() {
     iniitialcountdownVal = iniitialcountdownVal > 0 ? iniitialcountdownVal - 1 : 0;
     countdownelement.innerHTML = iniitialcountdownVal;
     var backimgPath = iniitialcountdownVal % 2 == 0 
}, 1000);