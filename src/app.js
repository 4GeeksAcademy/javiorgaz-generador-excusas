window.onload = function() {
  //write your code here

  let primera = "Un ";
  let nombre = [
    "mapache ",
    "cocodrilo ",
    "escarabajo ",
    "gato ",
    "funcionario "
  ];
  let adjetivo = [
    "furioso ",
    "bipedo ",
    "sudado ",
    "asustado ",
    "feliz ",
    "viejo ",
    "bipedo "
  ];
  let accion = [
    "ha lanzado ",
    "se ha comido ",
    "ha vendido ",
    "ha escupido ",
    "me ha robado ",
    "ha quemado "
  ];
  let objeto = [
    "mi raqueta ",
    "mi chaqueta ",
    "mi telefono ",
    "mi libro ",
    "mi comida "
  ];
  let donde = ["al lago", "a una central nuclear", "en mi casa"];

  let primeraN = Math.floor(Math.random() * primera.length);
  let nombreN = Math.floor(Math.random() * nombre.length);
  let adjetivoN = Math.floor(Math.random() * adjetivo.length);
  let accionN = Math.floor(Math.random() * accion.length);
  let objetoN = Math.floor(Math.random() * objeto.length);
  let dondeN = Math.floor(Math.random() * donde.length);

  document.querySelector("#excusa").innerHTML =
    primera +
    nombre[primeraN] +
    adjetivo[adjetivoN] +
    accion[accionN] +
    objeto[objetoN] +
    donde[dondeN];
};
