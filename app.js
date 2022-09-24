let n=document.getElementById("name");
let image=document.getElementById("image");
image.addEventListener('mouseover',fun);
image.addEventListener('mouseout',norm);
n.addEventListener('mouseover',big);
n.addEventListener('mouseout',small);
function fun(){
    image.style.width="450px";
    image.style.height="340px";
}
function norm(){
    image.style.width="200px";
    image.style.height="200px";
}
function big(){
    n.style.fontSize="30px";
}
function small(){
    n.style.fontSize="20px";
}