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

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));

$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});

