document.addEventListener("DOMContentLoaded", function () {

    //search box
    const searchBox = document.querySelector(".search");
    const videos = document.querySelectorAll(".video");

    searchBox.addEventListener("keyup", function () {
        let searchValue = searchBox.value.toLowerCase();

        videos.forEach(video => {
            let title = video.querySelector(".title").innerText.toLowerCase();

            if (title.includes(searchValue)) {
                video.style.display = "block";
            } else {
                video.style.display = "none";
            }
        });
    });


   
    const categories = document.querySelectorAll(".box");

    categories.forEach(category => {
        category.addEventListener("click", function () {

            let categoryText = category.innerText.toLowerCase();

            videos.forEach(video => {
                let title = video.querySelector(".title").innerText.toLowerCase();

                if (
                    categoryText === "all" ||
                    title.includes(categoryText)
                ) {
                    video.style.display = "block";
                } else {
                    video.style.display = "none";
                }
            });

        });
    });


    // hover on thumbnail
    videos.forEach(video => {

        video.addEventListener("mouseenter", function () {
            video.style.transform = "scale(1.05)";
            video.style.transition = "0.3s";
            video.style.cursor = "pointer";
        });

        video.addEventListener("mouseleave", function () {
            video.style.transform = "scale(1)";
        });

    });


    
    const menuBtn = document.querySelector(".menu");
    const sidebar = document.querySelector(".side-bar");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("hide");
    });


    //BELL
    const bell = document.querySelector(".bell");

    bell.addEventListener("click", function () {
        alert("🔔 Notifications opened");
    });


    // ===== CREATE BUTTON =====
    const createBtn = document.querySelector(".create");

    createBtn.addEventListener("click", function () {
        alert("🎥 Create video clicked");
    });


    // ===== MICROPHONE =====
    const mic = document.querySelector(".micro-icon");

    mic.addEventListener("click", function () {
        alert("🎤 Voice search activated");
    });
    // video link
    const thumbnails = document.querySelectorAll(".thumbnail");

    const videoLinks = [
        "https://youtu.be/x0Uue3nnR14?si=O25bCmg-srFau9WD",
        "https://youtu.be/LpJIt2aot1s?si=HPJiRZHvQxCalpf3",
        "https://youtu.be/gpVruTsSAlk?si=-l69e1-rB9MlOJS6",
        "https://youtu.be/BYrw-JL84rU?si=3jyr-wCnyQV7cOkl",
        "https://youtu.be/7NgNnaLlsaw?si=8Cle-t0SQcINkwb5",
        "https://youtu.be/XGa4onZP66Q?si=xBiIW7UdR4tBpcmv"
    ];

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            window.open(videoLinks[index], "_blank");
        });
    });

});