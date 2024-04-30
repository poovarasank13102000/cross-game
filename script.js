
var style=document.querySelector('td')
console.log(style.textContent)

function change(event) {
    event.target.style.backgroundColor = 'aqua'
   
}
function fname(event){
  event.result.textContent=style.textContent
}
 
