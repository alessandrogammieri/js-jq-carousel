
$( document ).ready(function() {
  // Carousel

   // Arrow next del Carousel
  $(".next").click(nextimg);
    // Funzione che richiamiamo nel click
  function nextimg () {
    // Variabile in cui salviamo lo stato di attivazione
    var activeimg = $(".carousel img.active");
    // Al momento del click rimuoviamo la classe active
    activeimg.removeClass("active");

    // Fissiamo le condizioni
    if (activeimg.hasClass("last")) {
      $(".first").addClass("active");
    } else {
      activeimg.next("img").addClass("active");
    }
  }

    // Arrow prev del Carousel
  $(".prev").click(previmg);
    // Funzione che richiamiamo nel click
  function previmg () {
    // Variabile in cui salviamo lo stato di attivazione
    var activeimg = $(".carousel img.active");
    // Al momento del click rimuoviamo la classe active
    activeimg.removeClass("active");

    // Fissiamo le condizioni
    if (activeimg.hasClass("first")) {
      $(".last").addClass("active");
    } else {
      activeimg.prev("img").addClass("active");
    }
  }

});
