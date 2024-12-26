document.addEventListener('DOMContentLoaded', () => {
    // Select all department links
    const departmentLinks = document.querySelectorAll('.departments-section ul li a');
    // Select all department detail sections
    const departmentSections = document.querySelectorAll('section[id]');

    // Add click event listener to each department link
    departmentLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Get the ID of the target department from the href attribute
            const targetId = link.getAttribute('href').substring(1);

            // Hide all department sections
            departmentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the clicked department section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });

    // Initially hide all sections
    departmentSections.forEach(section => {
        section.style.display = 'none';
    });
});
