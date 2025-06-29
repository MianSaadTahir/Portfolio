document.addEventListener('DOMContentLoaded', function() {
    const roles = [
        "Full Stack Developer",
        "AI/ML Engineer",
        "Cybersecurity Enthusiast",
        "Problem Solver"
    ];

    const roleElement = document.getElementById("role");
    let roleIndex = 0;
    let charIndex = 0;
    let typing = true;

    // Maintain fixed width to prevent layout shifts
    const maxLength = Math.max(...roles.map(role => role.length));
    roleElement.style.minWidth = `${maxLength}ch`;

    function typeRole() {
        const currentRole = roles[roleIndex];

        if (typing) {
            if (charIndex < currentRole.length) {
                roleElement.textContent += currentRole.charAt(charIndex);
                charIndex++;
                setTimeout(typeRole, 100);
            } else {
                typing = false;
                setTimeout(typeRole, 2500);
            }
        } else {
            if (charIndex > 0) {
                roleElement.textContent = currentRole.slice(0, charIndex - 1);
                charIndex--;
                setTimeout(typeRole, 50);
            } else {
                typing = true;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 500);
            }
        }
    }

    typeRole();
});