document.addEventListener("DOMContentLoaded", () => {
    // Project Data for Modal and Progress Sync
    const projects = {
        1: { video: "", desc: "A chill 3D platformer.", link: "https://ciarantdev.itch.io/cosmos-adventure-demo", progress: 10 },
        2: { video: "", desc: "Fast-paced tactical shooter.", link: "#", progress: 60 },
        3: { video: "https://www.youtube.com/embed/qrkHyet6y5o", desc: "Sci-fi adventure on Steam.", link: "https://store.steampowered.com/app/1950760/Project_Luna/", progress: 0 },
        4: { video: "https://www.youtube.com/embed/fy6DlFiszWI", desc: "Rage-inducing puzzle platformer on Steam.", link: "https://store.steampowered.com/app/2291910/Robo_Rob/", progress: 100 },
        5: { video: "https://www.youtube.com/embed/XK1AhpbhdwE", desc: "A physics-based driving game.", link: "https://ciarantdev.itch.io/sillydrifters", progress: 100 },
        6: { video: "https://www.youtube.com/embed/adfmsK73c90", desc: "An idle space sim.", link: "https://ciarantdev.itch.io/satellite", progress: 100 },
        7: { video: "", desc: "A chill 3D adventure.", link: "#", progress: 0 },
        8: { video: "", desc: "A scifi co-op adventure.", link: "#", progress: 0 },
        9: { video: "", desc: "A fast-paced platformer.", link: "#", progress: 0 }
    };

    // Sync Progress Bars from projects Object
    document.querySelectorAll(".project").forEach(project => {
        const projectId = project.getAttribute("data-id");
        const projectData = projects[projectId];
        if (projectData) {
            const progressFill = project.querySelector(".progress-fill");
            progressFill.style.width = `${projectData.progress}%`;
        }
    });

    // Project Modal Logic
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
            
            projectModalTitle.textContent = btn.parentElement.querySelector("h3").textContent; // From HTML
            projectModalDesc.textContent = project.desc;
            projectModalLink.href = project.link;

            projectModalIcons.innerHTML = btn.parentElement.querySelector("i") ? btn.parentElement.querySelector("i").outerHTML : "";

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
});