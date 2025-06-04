let tabel = document.getElementById("tabelul");
let celula = document.getElementsByTagName("td");
let rand = document.querySelectorAll(".rand");
let player1 = document.getElementById("Player");
let player2 = document.getElementById("Player_2");
let card = document.querySelector("#card");
let buton = document.querySelector("#restart");
let jucator = document.querySelector("#jucator");
let x = true;
tabel.addEventListener("click", (e) => {
    let target = e.target;
    if(target.tagName === "TD" && target.innerHTML === ''){
        if (x){
            target.innerHTML = '<img src="./images/X.png" alt="X" width="150px" height="150px">';
            player1.style.display = "none";
            player2.style.display = "flex";
        } else {
            target.innerHTML = '<img src="./images/O2.jpeg" alt="O" width="150px" height="150px">';
            player1.style.display = "flex";
            player2.style.display = "none";
        }
        target.style.cursor = "default";
        target.classList.add("ocupat"); 
        if (verificaCastigator()) {
            if(x){
                player1.style.display = "flex";
                player2.style.display = "none";
              }else{
                player2.style.display = "flex";
                player1.style.display = "none";
              }
            setTimeout(() => {
              jucator.innerText = "Player " + (x ? "2" : "1") + " a câștigat!";
              jucator.style.backgroundColor = `${x ? "blue" : "red"}`;
              document.getElementById("card_container").classList.add("active");
              document.getElementById("overlay").classList.add("active");
          
              buton.addEventListener("click", () => {
                location.reload();
              });
            }, 100);
          }
          let count = 0
          for (let i = 0; i < celula.length; i++) {
          if(celula[i].classList.contains("ocupat")) {
            count++;
          }
            }
        if (count === 9 && !verificaCastigator()) {
            jucator.innerText = "Egalitate!";
            jucator.style.backgroundColor = "green";
            document.getElementById("card_container").classList.add("active");
            document.getElementById("overlay").classList.add("active");
            buton.addEventListener("click", () => {
              location.reload();
            });
        }
        x = !x;
    }
})
function verificaCastigator() {
    const castiga = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (let combinatii of castiga) {
        const [a, b, c] = combinatii;
        if (
            celula[a].innerHTML !== '' &&
            celula[a].innerHTML === celula[b].innerHTML &&
            celula[a].innerHTML === celula[c].innerHTML
        ) {
            return true;
        }
    }
    return false;
}