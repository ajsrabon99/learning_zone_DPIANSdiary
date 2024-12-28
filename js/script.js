document.addEventListener('DOMContentLoaded', () => {
    const departmentLinks = document.querySelectorAll('.departments-section ul li a');
    const departmentSections = document.querySelectorAll('section[id]');

    departmentLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            // Get the ID of the target department from the href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Hide all department sections
            departmentSections.forEach(section => {
                section.style.display = 'none';
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });

    departmentSections.forEach(section => {
        section.style.display = 'none';
    });
});
