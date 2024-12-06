// Funkcja do otwierania menu
function openMenu() {
    document.getElementById("sidebar").style.width = "250px";
}

// Funkcja do zamykania menu
function closeMenu() {
    document.getElementById("sidebar").style.width = "0";
}

// Funkcja do przełączania sekcji
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    closeMenu(); // Zamknij menu po wyborze sekcji
}
