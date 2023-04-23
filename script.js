var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="150px";

var inputdate=document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.id="dob";
inputdate.style.width="30%";

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Display data";
button.style.margin="10px";

button.addEventListener("click",displaydata);
div.append(inputdate,button);
document.body.append(div);

function displaydata(){
var input=document.getElementById("dob").ariaValueMax;
console.log(typeof(input));

var birthdate=new Date();
console.log(birthdate);

var currentdate=new Date();
console.log(currentdate);

var milliseconddiff=parseInt(currentdate.getTime())-parseInt(birthdate.getTime());
console.log(`milliseconddiff:${milliseconddiff}`);

var seconddiff=Math.floor(milliseconddiff/1000);
console.log(`seconddidd:${seconddiff}`);

var minutediff=Math.floor(seconddiff/60);
console.log(`minutediff:${minutediff}`);

var hoursdiff=Math.floor(minute/60);
console.log(`hoursdiff:${hoursdiff}`);

var daydiff=Math.floor(hoursdiff/24);
console.log(`daydiff:${daydiff}`);

var yeardiff=currentdate.getFullYear()-birthdate.getFullYear();
console.log(`yeardiff:${yeardiff}`);

var monthdiff=yeardiff*12+(currentdate.getMonth()+1)-(birthdate.getMonth()+1);
console.log(`monthdiff:${monthdiff}`); 
}

