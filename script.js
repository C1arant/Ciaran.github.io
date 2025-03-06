// Project Modal Logic
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
        video: "", 
        desc: "A fast-paced platformer.", 
        link: "#",
        platform: "itch"
    }
};

const projectModal = document.getElementById("modal");
const projectModalTitle = document.getElementById("modal-title");
const projectModalVideo = document.getElementById("modal-video");
const projectModalComingSoon = document.getElementById("modal-coming-soon");
const projectModalDesc = document.getElementById("modal-desc");
const projectModalLink = document.getElementById("modal-link");
const projectModalIcons = document.getElementById("modal-icons");
const projectCloseBtn = document.querySelector("#modal .close");

document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const projectId = btn.parentElement.getAttribute("data-id");
        const project = projects[projectId];
        
        projectModalTitle.textContent = project.title;
        projectModalDesc.textContent = project.desc;
        projectModalLink.href = project.link;

        projectModalIcons.innerHTML = "";
        if (project.platform === "steam") {
            projectModalIcons.innerHTML = '<i class="fab fa-steam"></i>';
        } else if (project.platform === "itch") {
            projectModalIcons.innerHTML = '<i class="fa-brands fa-itch-io"></i>';
        }

        if (project.video) {
            projectModalVideo.src = project.video;
            projectModalVideo.style.display = "block";
            projectModalComingSoon.style.display = "none";
        } else {
            projectModalVideo.src = "";
            projectModalVideo.style.display = "none";
            projectModalComingSoon.style.display = "block";
        }

        projectModal.style.display = "block";
    });
});

projectCloseBtn.addEventListener("click", () => {
    projectModal.style.display = "none";
    projectModalVideo.src = "";
    projectModalComingSoon.style.display = "none";
    projectModalIcons.innerHTML = "";
});

window.addEventListener("click", (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = "none";
        projectModalVideo.src = "";
        projectModalComingSoon.style.display = "none";
        projectModalIcons.innerHTML = "";
    }
});

// Badge Modal Logic
const badges = {
    1: { title: "Bronze Twitch", image: "images/bronze-twitch.png", desc: "Reached Bronze Tier on Twitch" },
    2: { title: "Silver Twitch", image: "images/silver-twitch.png", desc: "Reached Silver Tier on Twitch" },
    3: { title: "Gold Twitch", image: "images/gold-twitch.png", desc: "Reached Gold Tier on Twitch" },
    4: { title: "Bronze YouTube", image: "images/bronze-youtube.png", desc: "Reached Bronze Tier on YouTube" },
    5: { title: "Silver YouTube", image: "images/silver-youtube.png", desc: "Reached Silver Tier on YouTube" },
    6: { title: "Gold YouTube", image: "images/gold-youtube.png", desc: "Reached Gold Tier on YouTube" },
    7: { title: "Steam Upload", image: "images/steam-badge.png", desc: "Uploaded a Game to Steam" }
};

const badgeModal = document.getElementById("badge-modal");
const badgeModalTitle = document.getElementById("badge-modal-title");
const badgeModalImage = document.getElementById("badge-modal-image");
const badgeModalDesc = document.getElementById("badge-modal-desc");
const badgeCloseBtn = document.querySelector("#badge-modal .close");

document.querySelectorAll("#badges li").forEach(badge => {
    badge.addEventListener("click", () => {
        const badgeId = badge.getAttribute("data-id");
        const badgeData = badges[badgeId];

        badgeModalTitle.textContent = badgeData.title;
        badgeModalImage.src = badgeData.image;
        badgeModalDesc.textContent = badgeData.desc;

        badgeModal.style.display = "block";
    });
});

badgeCloseBtn.addEventListener("click", () => {
    badgeModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === badgeModal) {
        badgeModal.style.display = "none";
    }
});