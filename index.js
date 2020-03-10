function convertirEnEuros() {
  let monnaie1 = document.querySelector('.champ1').value;
  let monnaie2 = (monnaie1 * 1.15);
  return monnaie2;
}
document.querySelector('.btn1').addEventListener('click', function() {
  let resultat = convertirEnEuros();
  document.querySelctor('.champ2').value = resulat;

});

function convertirEnLivres() {
  let monnaie1 = document.querySelector('.champ1').value;
  let monnaie2 = (monnaie1 / 1.15);
  return monnaie2;
}

document.querySelector('.btn2').addEventListener('click', function() {
  let resultat = convertirEnLivres();
  document.querySelector('.champ2').value = resultat;
});
