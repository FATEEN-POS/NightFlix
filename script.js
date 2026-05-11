// 🔍 SEARCH FUNCTION
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let searchValue = this.value.toLowerCase();

    let movies = document.querySelectorAll(".movie");

    movies.forEach(function (movie) {

        // اسم الفيلم
        let title = movie.querySelector("h3").textContent.toLowerCase();

        // البحث
        if (title.includes(searchValue)) {

            movie.style.display = "block";

            // تأثير ظهور
            movie.style.opacity = "1";
            movie.style.transform = "scale(1)";

        } else {

            movie.style.display = "none";

        }

    });

});


// 🎬 FILTER FUNCTION
function filterMovies(category) {

    let movies = document.querySelectorAll(".movie");

    movies.forEach(function (movie) {

        let movieCategory = movie.getAttribute("data-category");

        // عرض الكل أو التصنيف المطلوب
        if (category === "all" || movieCategory === category) {

            movie.style.display = "block";

            // Animation
            movie.style.opacity = "1";
            movie.style.transform = "scale(1)";

        } else {

            movie.style.display = "none";

        }

    });

}


// ✨ LOADING EFFECT
window.onload = function () {

    let movies = document.querySelectorAll(".movie");

    movies.forEach(function (movie, index) {

        movie.style.opacity = "0";
        movie.style.transform = "translateY(20px)";

        setTimeout(() => {

            movie.style.transition = "0.5s";
            movie.style.opacity = "1";
            movie.style.transform = "translateY(0)";

        }, index * 200);

    });

};