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
// 4) utilizzare un SETTINTERVAL che faccia scomparire i numeri dopo 30 secondi
// 5) far inserire uno alla volta i 5 numeri che l'utente ricorda 
// con un ciclo while
// 6) resoconto partita
let greed = document.getElementById('greed')
let play = document.getElementById('play')
let randomArr = [];
let randomNum;
let time = 5;
console.log(randomNum)


for (let i = 0; i < 5; i++) {
     randomNum = genUniqueNumberRandom(1, 100, randomArr);
     randomArr.push(randomNum)
} console.log(randomArr)
for (let i = 0; i < 5 ; i++){
     let newsquare = genSquare(randomArr[i]);
     greed.append(newsquare)
}






let mytimer = setInterval(function (){
     time--;
     console.log(time)
     if(time === 0)clearInterval(mytimer)
}, 1000);

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