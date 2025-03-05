const projects = {
    1: { 
        title: "Cosmo's Adventure", 
        video: "", 
        image: "images/game1.jpg",
        desc: "A chill 3D platformer.", 
        link: "https://ciarantdev.itch.io/cosmos-adventure-demo"
    },
    2: { 
        title: "Cyber League", 
        video: "", 
        image: "images/game2.jpg",
        desc: "Fast-paced tactical shooter.", 
        link: "#"
    },
    3: { 
        title: "Project Luna", 
        video: "https://www.youtube.com/embed/qrkHyet6y5o", 
        image: "images/game3.jpg",
        desc: "Sci-fi adventure on Steam.", 
        link: "https://store.steampowered.com/app/1950760/Project_Luna/"
    },
    4: { 
        title: "Robo Rob", 
        video: "https://www.youtube.com/embed/fy6DlFiszWI", 
        image: "images/game4.jpg",
        desc: "Rage-inducing puzzle platformer on Steam.", 
        link: "https://store.steampowered.com/app/2291910/Robo_Rob/"
    },
    5: { 
        title: "Silly Drifters", 
        video: "https://www.youtube.com/embed/XK1AhpbhdwE", 
        image: "images/game5.jpg",
        desc: "A physics-based driving game.", 
        link: "https://ciarantdev.itch.io/sillydrifters"
    },
    6: { 
        title: "Frontier Manager", 
        video: "https://www.youtube.com/embed/adfmsK73c90", 
        image: "images/game6.jpg",
        desc: "An idle space sim.", 
        link: "https://ciarantdev.itch.io/satellite"
    },
    7: { 
        title: "Pixel Dungeon", 
        video: "", 
        image: "images/game7.jpg",
        desc: "A retro-style dungeon crawler.", 
        link: "#"
    },
    8: { 
        title: "Space Invaders", 
        video: "", 
        image: "images/game8.jpg",
        desc: "A modern take on a classic.", 
        link: "#"
    },
    9: { 
        title: "Super Jump", 
        video: "", 
        image: "images/game9.jpg",
        desc: "A fast-paced platformer.", 
        link: "#"
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalVideo = document.getElementById("modal-video");
const modalImage = document.getElementById("modal-image");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectId = btn.parentElement.getAttribute("data-id");
        const project = projects[projectId];
        
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.desc;
        modalLink.href = project.link;

        if (project.video) {
            modalVideo.src = project.video;
            modalVideo.style.display = "block";
            modalImage.style.display = "none";
        } else {
            modalVideo.src = "";
            modalVideo.style.display = "none";
            modalImage.src = project.image;
            modalImage.style.display = "block";
        }

        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.src = ""; // Stop video
    modalImage.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalVideo.src = "";
        modalImage.style.display = "none";
    }
});