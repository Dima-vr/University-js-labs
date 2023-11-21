document.addEventListener('DOMContentLoaded', function() {
    var infoChanged = false;

    function changeMovieInfo() {
        var movieInfoElement = document.getElementById("movieInfo");

        if (!infoChanged) {
            movieInfoElement.innerHTML = "Title: Avengers: Endgame<br>Genre: Action/Adventure<br>Duration: 3h 2min";
        } else {
            movieInfoElement.innerHTML = "Click the button to change movie information.";
        }

        infoChanged = !infoChanged;
    }

    document.getElementById("changeInfoBtn").addEventListener("click", changeMovieInfo);

    document.getElementsByTagName("h1")[0].addEventListener("mouseover", function () {
        alert("Welcome to our cinema!");
    });

    document.addEventListener("keydown", function (event) {
        console.log("Key pressed: " + event.key);
    });

    document.querySelector(".movie-poster").addEventListener("click", function () {
        alert("You clicked on the movie poster!");
    });
    const changeColorButton = document.getElementById('changeColorButton');
    const targetParagraph = document.getElementById('targetParagraph');

    changeColorButton.addEventListener('click', function () {
        targetParagraph.classList.add('change-color-animation');

        targetParagraph.addEventListener('animationend', function() {
            targetParagraph.classList.remove('change-color-animation');
        }, { once: true });

       const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        targetParagraph.style.color = randomColor;
    });

    targetParagraph.addEventListener('mouseover', function () {
        targetParagraph.style.fontWeight = 'bold';
    });

    targetParagraph.addEventListener('mouseout', function () {
        targetParagraph.style.fontWeight = 'normal';
    });

    targetParagraph.addEventListener('dblclick', function () {
        targetParagraph.classList.toggle('change-color-animation');
    });


    document.body.addEventListener('keydown', function (event) {
        alert('Key ' + event.key + ' was pressed!');
    });
});
