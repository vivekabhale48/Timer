var commingday = new Date("aug 30, 2022 12:00:00").getTime();
// console.log(commingday);
// console.log(currentday);

const a = 1000*60;

var x = setInterval(function() {

var currentday = new Date().getTime();

var diff = (commingday - currentday);

var days = Math.floor(diff/(1000*24*60*60));

console.log(days);

var hours = Math.floor((diff%(1000*24*60*60))/(a*60));

console.log(hours);

var mins =  Math.floor((diff%(a*60))/(a));

console.log(mins);

var sec = Math.floor((diff%(a))/(1000));

console.log(sec);

var p = document.getElementById('time');

// p.innerHTML = days + "d " + hours + "hrs " + mins + "mins " + sec + "s"; 

p.innerHTML = `<div style="background-color: black; width: 100%; height: 100%; border-radius:20px; box-shadow: 0 20px 15px -13px rgba(47, 40, 40, 0.8)">${days}</div>
<div style="background-color: black; width: 100%; height: 100%; border-radius:20px; box-shadow: 0 20px 15px -13px rgba(47, 40, 40, 0.8)">${hours}</div>
<div style="background-color: black; width: 100%; height: 100%; border-radius:20px; box-shadow: 0 20px 15px -13px rgba(47, 40, 40, 0.8)">${mins}</div>
<div style="background-color: black; width: 100%; height: 100%; border-radius:20px; box-shadow: 0 20px 15px -13px rgba(47, 40, 40, 0.8)">${sec}</div>`

},1000);


// console.log(diff);


