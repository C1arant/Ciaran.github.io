const projects = {
    1: {
        title: "Game 1",
        video: "https://www.youtube.com/embed/VIDEO_ID_1",
        desc: "A wild adventure in a pixelated realm, built with Unity.",
        link: "https://github.com/C1arant/game1"
    },
    2: {
        title: "Game 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_2",
        desc: "Puzzles that twist your mind, made in Godot.",
        link: "https://github.com/C1arant/game2"
    },
    3: {
        title: "Game 3",
        video: "https://www.youtube.com/embed/VIDEO_ID_3",
        desc: "Fast-paced action awaits, coded in C#.",
        link: "https://github.com/C1arant/game3"
    },
    4: {
        title: "Game 4",
        video: "https://www.youtube.com/embed/VIDEO_ID_4",
        desc: "Explore a mysterious universe, built with Unreal.",
        link: "https://github.com/C1arant/game4"
    },
    5: {
        title: "Game 5",
        video: "https://www.youtube.com/embed/VIDEO_ID_5",
        desc: "Strategy meets chaos, a passion project.",
        link: "https://github.com/C1arant/game5"
    },
    6: {
        title: "Game 6",
        video: "https://www.youtube.com/embed/VIDEO_ID_6",
        desc: "A cozy game to unwind, made for fun.",
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