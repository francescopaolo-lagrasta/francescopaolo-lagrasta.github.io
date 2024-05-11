// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('marx');
      return;
    }

    entry.target.classList.remove('marx');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll('.marked');

//Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));

// $(".bar").each(function(){
//   $(this).find(".bar-inner").animate({
//     width: $(this).attr("data-width")
//   },2000)
// });

 // Funzione per controllare se l'elemento è visibile a schermo
$(document).ready(function() {
 
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Funzione per animare le barre quando diventano visibili a schermo
  function animateBarsOnScroll() {
    $(".bar").each(function() {
      if (isElementInViewport(this)) {
        $(this).find(".bar-inner").animate({
          width: $(this).attr("data-width")
        }, 1500); // Tempo di animazione in millisecondi
      }
    });
  }

  // Attiva l'animazione delle barre quando la pagina è pronta e durante lo scrolling
  $(window).on("load scroll", function() {
    animateBarsOnScroll();
  });
});