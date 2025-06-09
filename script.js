import { skillsData } from './data/skills.js';
import { projectsData } from './data/projects.js';


document.addEventListener('DOMContentLoaded', function () {

  const skillsContainer = document.querySelector('.skills-grid');
  if (skillsContainer && skillsData) {
    skillsContainer.innerHTML = '';
    skillsData.forEach(skill => {
      const div = document.createElement('div');
      div.className = 'skill-category';
      div.innerHTML = `
        <h3>${skill.category}</h3>
        <div class="skill-items">
          ${skill.items.map(item => `<span>${item}</span>`).join('')}
        </div>
      `;
      skillsContainer.appendChild(div);
    });
  }

  // Populate Projects
  const projectContainer = document.querySelector('.projects-grid');
  if (projectContainer && projectsData) {
    projectContainer.innerHTML = '';
    projectsData.forEach(project => {
      const div = document.createElement('div');
      div.className = 'project-card';
      div.innerHTML = `
        <div class="project-image" style="background-image: url('${project.image}');">
          <div class="overlay"></div>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tech-used">
            ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
          </div>
          <a href="${project.link}" class="btn secondary" target="_blank">View Project</a>
        </div>
      `;
      projectContainer.appendChild(div);
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[type="text"]:nth-child(3)').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.skill-category, .project-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});