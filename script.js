document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    // Toggle menu
    menu.classList.toggle('hidden');
    
    // Toggle icon (menu ↔ close)
    if (icon.innerHTML.includes('M4 6h16')) {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M6 18L18 6M6 6l12 12" />`; // XIcon
    } else {
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16" />`; // MenuIcon
    }
  });
  
  // Close the menu when a link is clicked
  const menuLinks = document.querySelectorAll('#mobile-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('menu-icon');
  
      // Close the menu
      menu.classList.add('hidden');
      
      // Reset icon to menu icon
      icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16" />`; // MenuIcon
    });
  });
  

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(this);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        alert('Form submitted successfully!');
      } else {
        alert('Error: ' + data.message);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});