// Smooth Scroll Effect for Navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Animated Header Text
  const headerText = document.querySelector('.header h1');
  let text = headerText.innerText;
  headerText.innerText = '';
  let i = 0;
  
  function typeText() {
    if (i < text.length) {
      headerText.innerText += text.charAt(i);
      i++;
      setTimeout(typeText, 100);
    }
  }
  typeText();
  