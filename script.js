const projects = {
    1: {
        title: "Cosmo's Adventure",
        video: "https://www.youtube.com/embed/VIDEO_ID_1",
        desc: "A chill 3d platformer.",
        link: "https://github.com/C1arant/game1"
    },
    2: {
        title: "Cyber League",
        video: "https://www.youtube.com/embed/VIDEO_ID_2",
        desc: "Fast pased tactical shooter.",
        link: "https://github.com/C1arant/game2"
    },
    3: {
        title: "Project Luna",
        video: "https://youtu.be/qrkHyet6y5o",
        desc: "Welcome to the world of Project Luna, A massive open world space adventure.",
        link: "https://github.com/C1arant/game3"
    },
    4: {
        title: "Robo Rob",
        video: "https://youtu.be/fy6DlFiszWI",
        desc: "Rage inducing Puzzle platformer.",
        link: "https://github.com/C1arant/game4"
    },
    5: {
        title: "Silly Drifters",
        video: "https://youtu.be/XK1AhpbhdwE",
        desc: "a little physics based driving game i made in a couple hours.",
        link: "https://github.com/C1arant/game5"
    },
    7: {
        title: "Pixel Dungeon",
        video: "https://youtu.be/adfmsK73c90",
        desc: "a cute little idle game where you deploy satellites and make money :D.",
        link: "https://github.com/C1arant/game6"
    },
    8: {
        title: "Space Invaders",
        video: "https://youtu.be/adfmsK73c90",
        desc: "a cute little idle game where you deploy satellites and make money :D.",
        link: "https://github.com/C1arant/game6"
    },
    9: {
        title: "Super Jump",
        video: "https://youtu.be/adfmsK73c90",
        desc: "a cute little idle game where you deploy satellites and make money :D.",
        link: "https://github.com/C1arant/game6"
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalVideo = document.getElementById("modal-video");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectId = btn.parentElement.getAttribute("data-id");
        const project = projects[projectId];
        
        modalTitle.textContent = project.title;
        modalVideo.src = project.video;
        modalDesc.textContent = project.desc;
        modalLink.href = project.link;
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.src = ""; // Stop video
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalVideo.src = "";
    }
});