        // JavaScript pour gérer l'affichage de la barre de recherche
        document.addEventListener("DOMContentLoaded", function () {
            const searchIcon = document.getElementById("search-icon");
            const searchInput = document.getElementById("search-input");

            searchIcon.addEventListener("click", function () {
                searchInput.classList.toggle("active");
                if (searchInput.classList.contains("active")) {
                    searchInput.focus();
                }
            });

            searchInput.addEventListener("blur", function () {
                searchInput.classList.remove("active");
            });
        });