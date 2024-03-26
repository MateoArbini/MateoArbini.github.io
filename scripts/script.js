document.addEventListener("DOMContentLoaded", function() {
    const button_up = document.getElementById("button_up");
    button_up.addEventListener("click", function(event) {
        // El event.preventDefault, evita que al apretar el enlace, se realicen
        // determinadas acciones que ya estan establecidas. Este lo utilizamos
        // para que noostros determinemos que acciones le vamos a instruir al enlace
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});