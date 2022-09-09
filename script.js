const buttonAgain = document.querySelector('#again')
const buttonTry = document.querySelector('#try')
const master1 = document.querySelector('.master1')
const master2 = document.querySelector('.master2')
const input = document.querySelector('#inputNumber')







let randon = Math.round(Math.random() * 10)
let xVezes = 1
console.log(randon)


buttonTry.addEventListener('click',function() { 

  if(input.value > 10 || input.value < 0){
    alert("Escolha um número entre 0 e 10 😊 ")
  }
  else if(randon == input.value ){
    master1.classList.add('hide')
    master2.classList.remove('hide')
    if(xVezes == 1){
      master2.firstElementChild.innerHTML = ('Acertou de primeira</br> Tu é barriu</br>Já está apto para Mega Sena! </br> Divida comigo')
    }
    else{
      master2.querySelector("h2").innerText = ('Acertou em  ' + xVezes + ' tentativas!')
    }
    xVezes = 1
  }
  else{
    xVezes++
    console.log(xVezes)
  } 


})

buttonAgain.addEventListener('click',function() {
  
  master1.classList.remove('hide')
  master2.classList.add('hide')
   randon = Math.round(Math.random() * 10)
  
console.log(randon)


  
})






