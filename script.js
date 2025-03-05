const projects = {
    1: { 
        title: "Cosmo's Adventure", 
        video: "", 
        desc: "A chill 3D platformer.", 
        link: "https://ciarantdev.itch.io/cosmos-adventure-demo",
        platform: "itch" // Added platform indicator
    },
    2: { 
        title: "Cyber League", 
        video: "", 
        desc: "Fast-paced tactical shooter.", 
        link: "#",
        platform: "" // No platform
    },
    3: { 
        title: "Project Luna", 
        video: "https://www.youtube.com/embed/qrkHyet6y5o", 
        desc: "Sci-fi adventure on Steam.", 
        link: "https://store.steampowered.com/app/1950760/Project_Luna/",
        platform: "steam" // Added platform indicator
    },
    4: { 
        title: "Robo Rob", 
        video: "https://www.youtube.com/embed/fy6DlFiszWI", 
        desc: "Rage-inducing puzzle platformer on Steam.", 
        link: "https://store.steampowered.com/app/2291910/Robo_Rob/",
        platform: "steam" // Added platform indicator
    },
    5: { 
        title: "Silly Drifters", 
        video: "https://www.youtube.com/embed/XK1AhpbhdwE", 
        desc: "A physics-based driving game.", 
        link: "https://ciarantdev.itch.io/sillydrifters",
        platform: "itch" // Added platform indicator
    },
    6: { 
        title: "Frontier Manager", 
        video: "https://www.youtube.com/embed/adfmsK73c90", 
        desc: "An idle space sim.", 
        link: "https://ciarantdev.itch.io/satellite",
        platform: "itch" // Added platform indicator
    },
    7: { 
        title: "Pixel Dungeon", 
        video: "", 
        desc: "A retro-style dungeon crawler.", 
        link: "#",
        platform: "" // No platform
    },
    8: { 
        title: "Space Invaders", 
        video: "", 
        desc: "A modern take on a classic.", 
        link: "#",
        platform: "" // No platform
    },
    9: { 
        title: "Super Jump", 
        video: "", 
        desc: "A fast-paced platformer.", 
        link: "#",
        platform: "" // No platform
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
        modalIcons.innerHTML = ""; // Clear previous icons
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
    modalVideo.src = ""; // Stop video
    modalComingSoon.style.display = "none";
    modalIcons.innerHTML = ""; // Clear icons
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalVideo.src = "";
        modalComingSoon.style.display = "none";
        modalIcons.innerHTML = ""; // Clear icons
    }
});