// Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt() ( o meglio caselle di input).
// Dopo che sono stati inseriti i 5 numeri, il software 
// dice quanti e quali dei numeri da indovinare sono stati individuati.


// 1) funzione che generi 5 numeri randomici diversi  FATTOOO
// 2) pushare in un array inizialmente vuoto i 5 numeri  FATTOO
// 3) far apparire i numeri a schermo FATTOO
// 4) utilizzare un SETT che faccia scomparire i numeri dopo 30 secondi FATTOO
// 5) far inserire uno alla volta i 5 numeri che l'utente ricorda 
// 6) resoconto partita
let greed = document.getElementById('greed')
let play = document.getElementById('play')
let form = document.getElementById('inputform')
let invia = document.getElementById('invia')
let randomArr = [];
let user = []
let randomNum;
let id = document.getElementById('result')
console.log(randomNum)

play.addEventListener('click', function () {

     for (let i = 0; i < 5; i++) {
          setTimeout(() => {
               newsquare.classList.add('invisible')
               console.log(form)
               form.classList.remove('d-none')
          }, 5000);
          randomNum = genUniqueNumberRandom(1, 100, randomArr);
          randomArr.push(randomNum)
          let newsquare = genSquare(randomArr[i]);
          greed.append(newsquare)
     } console.log(randomArr)
     invia.addEventListener('click', function () {
          let input1 = parseInt(document.getElementById('inp1').value)
          let input2 = parseInt(document.getElementById('inp2').value)
          let input3 = parseInt(document.getElementById('inp3').value)
          let input4 = parseInt(document.getElementById('inp4').value)
          let input5 = parseInt(document.getElementById('inp5').value)
          user = [input1, input2, input3, input4, input5]
          console.log(user)
          let trovato = true;
          for (let i = 0; i < 5; i++) {
               if (user[i] !== randomArr[i]) {
                    trovato = false;
               }
          } if (trovato === false) {
               console.log('perso')
               id.innerHTML = 'vinto'
          } else {
               console.log('vinto')
          }

     })

}, { once: true });




function genSquare(cont) {
     let newEl = document.createElement('article');
     newEl.innerHTML = '<span>' + cont + '</span>'
     newEl.classList.add('square');
     return newEl;
}

function genUniqueNumberRandom(min, max, listanum) {
     let trovato = false;
     let numRandom;
     while (trovato === false) {
          numRandom = getRndInteger(min, max);
          if (listanum.includes(numRandom) === false) {
               trovato = true;
          }
     }
     return numRandom;
}


function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}