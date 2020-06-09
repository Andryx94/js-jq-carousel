$(document).ready(
  function() {
    //click freccia indietro
    $(".prev").click(
      function() {
        caroselloIndietro();
      }
    )

    //click freccia avanti
    $(".next").click(
      function() {
        caroselloAvanti();
      }
    )
  }
);


//FUNZIONE Carosello indietro
function caroselloIndietro (){
  var immagineCorrente = $(".images img.active");
  var puntoCorrente = $(".nav i.active");

  immagineCorrente.removeClass("active");
  puntoCorrente.removeClass("active");

  if (immagineCorrente.hasClass("first")){
    $(".images .last").addClass("active");
    $(".nav .last").addClass("active");

  }
  else {
    immagineCorrente.prev().addClass("active");
    puntoCorrente.prev().addClass("active");
  }
};

//FUNZIONE Carosello avanti
function caroselloAvanti (){
  var immagineCorrente = $(".images img.active");
  var puntoCorrente = $(".nav i.active");

  immagineCorrente.removeClass("active");
  puntoCorrente.removeClass("active");

  if (immagineCorrente.hasClass("last")){
    $(".images .first").addClass("active");
    $(".nav .first").addClass("active");

  }
  else {
    immagineCorrente.next().addClass("active");
    puntoCorrente.next().addClass("active");
  }
};
