const input = document.getElementById("input");
const btn = document.getElementById("btn");
const popup = document.getElementById("popup");

btn.addEventListener("click", copy);

function copy(e){
  e.preventDefault();

  input.select();
  input.setSelectionRange(0,99999);
  document.execCommand("copy");

  popup.innerHTML = "Copied!!!";
  btn.style.color = "rgba(0,0,200,0.7)";

  setInterval(() =>{
    popup.innerHTML = "";
    btn.style.color = "black";
  },1000)
}