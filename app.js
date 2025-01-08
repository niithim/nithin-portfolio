const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
document.getElementById("contactForm").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent default form submission
  
	// Display confirmation message
	document.getElementById("confirmation").style.display = "block";
  
	// Clear the form
	this.reset();
  });
  document.addEventListener('DOMContentLoaded', function() {
	const progressBars = document.querySelectorAll('.progress');
	const percentages = document.querySelectorAll('.skill-percentage');
	
	progressBars.forEach((bar, index) => {
		const percentage = percentages[index].textContent;
		setTimeout(() => {
			bar.style.width = percentage;
		}, 200 * index); // Stagger the animations
	});
});
// JavaScript
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        subject: e.target[2].value,
        message: e.target[3].value
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Clear form
    e.target.reset();
    
    // Show success message (you can customize this)
    alert('Message sent successfully!');
});