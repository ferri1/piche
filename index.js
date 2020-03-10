function convertirEnEuros() {
  let monnaie1 = document.querySelector('.champ1').value;
  let monnaie2 = (monnaie1 * 1.15);
  return monnaie2;
}
document.querySelector('.btn2').addEventListener('click', function() {
  let resultat = convertirEnEuros();
  document.querySelector('.champ2').value = resultat;
});



function convertirEnLivres() {
  let monnaie2 = document.querySelector('.champ2').value;
  let monnaie1 = (monnaie2 / 1.15);
  return monnaie1;
}

document.querySelector('.btn1').addEventListener('click', function() {
  let resultat = convertirEnLivres();
  document.querySelector('.champ1').value = resultat;
});
