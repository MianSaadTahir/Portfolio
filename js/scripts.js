document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//name typing effect
document.addEventListener('DOMContentLoaded', function() {
    const name = "Saad Tahir";
    const nameElement = document.getElementById('name');
    let index = 1;
    let typing = true;


    nameElement.innerHTML = name.charAt(0);

    function type() {
        if (typing) {
            if (index < name.length) {
                nameElement.innerHTML += name.charAt(index);
                index++;
                setTimeout(type, 200);
            } else {
                typing = false;
                setTimeout(type, 2500);
            }
        } else {
            if (index > 1) {
                nameElement.innerHTML = nameElement.innerHTML.slice(0, -1);
                index--;
                setTimeout(type, 100);
            } else {
                typing = true;
                setTimeout(type, 500);
            }
        }
    }

    type();
});