// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - 70, // Adjust for fixed nav
              behavior: 'smooth'
          });
      }
  });
});

// Navbar background change on scroll
const navbar = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
      navbar.style.background = 'rgba(30, 51, 115, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
      navbar.style.background = 'rgba(30, 51, 115, 0.9)';
      navbar.style.boxShadow = 'none';
  }
});

// Active section highlighting in navigation
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href').substring(1) === section.getAttribute('id')) {
                  link.classList.add('active');
              }
          });
      }
  });
});

// Projects filter functionality
const filterProjects = (category) => {
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
      const technologies = project.querySelector('.project-technologies').textContent.toLowerCase();
      if (category === 'all' || technologies.includes(category.toLowerCase())) {
          project.style.display = 'block';
      } else {
          project.style.display = 'none';
      }
  });
};

// Typing effect for hero section
const text = "A Computer Engineer Specializing in AI & ML Solutions.";
let index = 0;
const typingEffect = () => {
  const element = document.querySelector('.hero-text p');
  if (element && index < text.length) {
      element.innerHTML = `${text.substring(0, index + 1)}<span class="cursor">|</span>`;
      index++;
      setTimeout(typingEffect, 100);
  }
};

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
  typingEffect();
});

// Form validation for contact form 
// const validateForm = (formElement) => {
//     const emailInput = formElement.querySelector('input[type="email"]');
//     const messageInput = formElement.querySelector('textarea');
  
//     if (emailInput && !emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//         alert('Please enter a valid email address');
//         return false;
//     }
  
//     if (messageInput && messageInput.value.length < 10) {
//         alert('Message must be at least 10 characters long');
//         return false;
//     }
  
//     return true;
// };

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
  });
  
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
});