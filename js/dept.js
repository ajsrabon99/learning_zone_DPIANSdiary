const departmentData = {
    "computer-science": "Computer Science and Technology focuses on programming, software development, and system design, providing a robust foundation for careers in IT and technology.",
    "civil-technology": "Civil Technology encompasses the study of infrastructure design, construction, and maintenance, essential for developing modern architecture and urban planning.",
    "electrical-technology": "Electrical Technology covers the principles of electricity, circuit design, and power systems to innovate in energy and automation.",
    "electronics-technology": "Electronics Technology dives into circuits, semiconductors, and IoT applications, forming the basis for modern electronic devices.",
    "mechanical-technology": "Mechanical Technology explores machinery, robotics, and thermodynamics, offering solutions to engineering challenges.",
    "architecture-technology": "Architecture Technology combines creativity and technical skills to design sustainable and functional spaces.",
    "food-technology": "Food Technology focuses on food production, preservation, and safety to enhance the global food supply chain.",
    "chemical-technology": "Chemical Technology investigates chemical processes and materials for industrial and consumer applications.",
    "environmental-technology": "Environmental Technology addresses sustainable practices and technologies for a healthier planet.",
    "power-technology": "Power Technology studies energy generation, distribution, and renewable resources for sustainable development.",
    "automobile-technology": "Automobile Technology delves into vehicle mechanics, design, and emerging electric car technologies.",
    "refrigeration-and-air-conditioning": "Refrigeration and Air Conditioning Technology focuses on cooling systems and HVAC innovations for comfort and efficiency."
};

const hash = window.location.hash.substring(1);
const detailsTitle = document.getElementById("details-title");
const detailsContent = document.getElementById("details-content");

if (hash && departmentData[hash]) {
    detailsTitle.textContent = hash.replace(/-/g, ' ').toUpperCase();
    detailsContent.textContent = departmentData[hash];
} else {
    detailsTitle.textContent = "Department Not Found";
    detailsContent.textContent = "The department details you are looking for are not available.";
}