document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded"); // Debug log to confirm script runs

    // Project Data for Modal
    const projects = {
        1: { video: "", desc: "A chill 3D platformer.", link: "https://ciarantdev.itch.io/cosmos-adventure-demo" },
        2: { video: "", desc: "Fast-paced tactical shooter.", link: "#" },
        3: { video: "https://www.youtube.com/embed/qrkHyet6y5o", desc: "Sci-fi adventure on Steam.", link: "https://store.steampowered.com/app/1950760/Project_Luna/" },
        4: { video: "https://www.youtube.com/embed/fy6DlFiszWI", desc: "Rage-inducing puzzle platformer on Steam.", link: "https://store.steampowered.com/app/2291910/Robo_Rob/" },
        5: { video: "https://www.youtube.com/embed/XK1AhpbhdwE", desc: "A physics-based driving game.", link: "https://ciarantdev.itch.io/sillydrifters" },
        6: { video: "https://www.youtube.com/embed/adfmsK73c90", desc: "An idle space sim.", link: "https://ciarantdev.itch.io/satellite" },
        7: { video: "", desc: "A chill 3D adventure.", link: "#" },
        8: { video: "", desc: "A scifi co-op adventure.", link: "#" },
        9: { video: "https://www.youtube.com/embed/7PZcmBfICuI", desc: "A fast-paced platformer.", link: "#" }
    };

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
            e.preventDefault(); // Prevent default link behavior
            console.log("Details button clicked"); // Debug log
            const projectId = btn.parentElement.getAttribute("data-id");
            const project = projects[projectId];
            
            projectModalTitle.textContent = btn.parentElement.querySelector("h3").textContent;
            projectModalDesc.textContent = project.desc;
            projectModalLink.href = project.link;

            projectModalIcons.innerHTML = btn.parentElement.querySelector("i") ? btn.parentElement.querySelector("i").outerHTML : "";

            // Show/Hide Play Button
            projectModalLink.style.display = project.link === "#" ? "none" : "inline-flex";

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
        1: { title: "Bronze Twitch", image: "images/bronze-twitch.png", desc: "Reached 200 followers" },
        4: { title: "Bronze YouTube", image: "images/bronze-youtube.png", desc: "Reached 500 subscribers" },
        5: { title: "Silver YouTube", image: "images/silver-youtube.png", desc: "Reached 1000 subscribers" },
        6: { title: "Gold YouTube", image: "images/gold-youtube.png", desc: "Reached 3000 subscribers" },
        7: { title: "Steam Upload", image: "images/steam-badge.png", desc: "Uploaded a Game to Steam" }
    };

    const badgeModal = document.getElementById("badge-modal");
    const badgeModalTitle = document.getElementById("badge-modal-title");
    const badgeModalImage = document.getElementById("badge-modal-image");
    const badgeModalDesc = document.getElementById("badge-modal-desc");
    const badgeCloseBtn = document.querySelector("#badge-modal .close");

    document.querySelectorAll("#badges li").forEach(badge => {
        badge.addEventListener("click", () => {
            console.log("Badge clicked"); // Debug log
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