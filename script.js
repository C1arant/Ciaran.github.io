const projects = {
    1: { 
        title: "Cosmo's Adventure", 
        video: "", 
        desc: "A chill 3D platformer.", 
        link: "https://ciarantdev.itch.io/cosmos-adventure-demo",
        platform: "itch"
    },
    2: { 
        title: "Cyber League", 
        video: "", 
        desc: "Fast-paced tactical shooter.", 
        link: "#",
        platform: "steam"
    },
    3: { 
        title: "Project Luna", 
        video: "https://www.youtube.com/embed/qrkHyet6y5o", 
        desc: "Sci-fi adventure on Steam.", 
        link: "https://store.steampowered.com/app/1950760/Project_Luna/",
        platform: "steam"
    },
    4: { 
        title: "Robo Rob", 
        video: "https://www.youtube.com/embed/fy6DlFiszWI", 
        desc: "Rage-inducing puzzle platformer on Steam.", 
        link: "https://store.steampowered.com/app/2291910/Robo_Rob/",
        platform: "steam"
    },
    5: { 
        title: "Silly Drifters", 
        video: "https://www.youtube.com/embed/XK1AhpbhdwE", 
        desc: "A physics-based driving game.", 
        link: "https://ciarantdev.itch.io/sillydrifters",
        platform: "itch"
    },
    6: { 
        title: "Frontier Manager", 
        video: "https://www.youtube.com/embed/adfmsK73c90", 
        desc: "An idle space sim.", 
        link: "https://ciarantdev.itch.io/satellite",
        platform: "itch"
    },
    7: { 
        title: "Wild Heart", 
        video: "", 
        desc: "A chill 3D adventure.", 
        link: "#",
        platform: "itch"
    },
    8: { 
        title: "Star Farer", 
        video: "", 
        desc: "A scifi co-op adventure.", 
        link: "#",
        platform: "itch"
    },
    9: { 
        title: "Carbon", 
        video: "https://www.youtube.com/embed/7PZcmBfICuI", 
        desc: "A fast-paced platformer.", 
        link: "#",
        platform: "itch"
    }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalVideo = document.getElementById("modal-video");
const modalComingSoon = document.getElementById("modal-coming-soon");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const modalIcons = document.getElementById("modal-icons");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectId = btn.parentElement.getAttribute("data-id");
        const project = projects[projectId];
        
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.desc;
        modalLink.href = project.link;

        // Handle platform icons
        modalIcons.innerHTML = "";
        if (project.platform === "steam") {
            modalIcons.innerHTML = '<i class="fab fa-steam"></i>';
        } else if (project.platform === "itch") {
            modalIcons.innerHTML = '<i class="fa-brands fa-itch-io"></i>';
        }

        if (project.video) {
            modalVideo.src = project.video;
            modalVideo.style.display = "block";
            modalComingSoon.style.display = "none";
        } else {
            modalVideo.src = "";
            modalVideo.style.display = "none";
            modalComingSoon.style.display = "block";
        }

        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.src = "";
    modalComingSoon.style.display = "none";
    modalIcons.innerHTML = "";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalVideo.src = "";
        modalComingSoon.style.display = "none";
        modalIcons.innerHTML = "";
    }
});