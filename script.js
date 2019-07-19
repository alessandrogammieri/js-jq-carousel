
$( document ).ready(function() {
  // Carousel

   // Arrow next del Carousel
  $(".next").click(nextimg);
    // Funzione che richiamiamo nel click
  function nextimg () {
    // Variabile in cui salviamo lo stato di attivazione
    var activeimg = $(".carousel img.active");
    var activedot = $(".dotnav i.active");
    // Al momento del click rimuoviamo la classe active
    activeimg.removeClass("active");
    activedot.removeClass("active");

    // Fissiamo le condizioni
    if (activeimg.hasClass("last") && activedot.hasClass("last")) {
      $("img.first").addClass("active");
      $(".dotnav i.first").addClass("active");
    } else {
      activeimg.next("img").addClass("active");
      activedot.next(".dotnav i").addClass("active");
    }
  }

    // Arrow prev del Carousel
  $(".prev").click(previmg);
    // Funzione che richiamiamo nel click
  function previmg () {
    // Variabile in cui salviamo lo stato di attivazione
    var activeimg = $(".carousel img.active");
    var activedot = $(".dotnav i.active");
    // Al momento del click rimuoviamo la classe active
    activeimg.removeClass("active");
    activedot.removeClass("active");

    // Fissiamo le condizioni
    if (activeimg.hasClass("first") && activedot.hasClass("first")) {
      $("img.last").addClass("active");
      $(".dotnav i.last").addClass("active");
    } else {
      activeimg.prev("img").addClass("active");
      activedot.prev(".dotnav i").addClass("active");
    }
  }

});
