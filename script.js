var button=document.createElement("button");
var span=document.createElement("span");
button.setAttribute("type","button");
span.setAttribute("type","span");
button.addEventListener("click",foo);
document.body.append(button);
function foo(){
    alert(parseInt(prompt("enter your age")));
}