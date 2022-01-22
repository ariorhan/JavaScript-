 let greeting = document.querySelector("button")
 greeting.addEventListener("click", domClick)

 function domClick() {
     alert("changed")
     document.getElementById("greeting").innerHTML = "Hola WORLD"
     // this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
 } 

