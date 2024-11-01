let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});

const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "roshanshreekumar6@gmail.com",
        Password : "25095BF4B57BBAC2E8A13069F114B2F61F59",
        To : 'roshanshreekumar6@gmail.com',
        From : "roshanshreekumar6@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})