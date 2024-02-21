const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry=> {
      // If the element is visible
      console.log(entry)
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('marx');
      }
    });
  });
  
  observer.observe(document.querySelector('.marked'));