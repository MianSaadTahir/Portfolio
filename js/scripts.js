document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const name = "Saad Tahir";
    const nameElement = document.getElementById('name');
    let index = 0;
    let typing = true;

    function type() {
        if (typing) {
            if (index < name.length) {
                nameElement.innerHTML += name.charAt(index);
                index++;
                setTimeout(type, 200);
            } else {
                typing = false; // Switch to deleting after typing is complete
                setTimeout(type, 2500); // Pause before starting to delete
            }
        } else {
            if (index > 0) {
                nameElement.innerHTML = nameElement.innerHTML.slice(0, -1);
                index--;
                setTimeout(type, 100);
            } else {
                typing = true; // Switch back to typing
                setTimeout(type, 500); // Pause before starting to type again
            }
        }
    }

    type(); // Start the typing process
});