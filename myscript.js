// richiamo il tasto inizia
let inizia = document.getElementById("inizia");
// variabile bombe
let bombPosition = [];
let bomb = 16;

// funzione bombe
function bombGrid(allBombs) {
  let bombCasual = parseInt(Math.floor(Math.random() * allBombs));
  return bombCasual;
}

inizia.addEventListener("click", function () {
  // richiamo la griglia
  let grid = document.getElementById("grid");
  // richiamo la difficoltà
  let level = document.getElementById("userSelect").value;
  grid.innerHTML = "";
  // condizioni che seguo se la difficoltà è ...
  if (level == 1) {
    for (i = 1; i <= 100; i++) {
      grid.innerHTML += `<div class="box boxFacile">${i}</div>`;
    }
    while (bombPosition.length < bomb) {
      let num = bombGrid(100);
      if (!bombPosition.includes(num));
      bombPosition.push(num);
    }
    console.log(bombPosition);
  } else if (level == 2) {
    for (i = 1; i <= 81; i++) {
      grid.innerHTML += `<div class="box boxMedio">${i}</div>`;
    }
  } else {
    for (i = 1; i <= 49; i++) {
      grid.innerHTML += `<div class="box boxDifficile">${i}</div>`;
    }
  }
  //aggiungo funzione del click sul box
  let box = document.getElementsByClassName("box");
  for (i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
      this.classList.add("safe");
    });
  }
});
let box = document.getElementsByClassName("box");
  for (b = 0; b < bombPosition.length; b++) {
    box[b].addEventListener("click", function () {
      this.classList.add("bomb");
    });
  }

