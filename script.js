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
        7: { video: "https://www.youtube.com/embed/jhYhq5vSfng", desc: "A Rage Driving Game", link: "https://ciarantdev.itch.io/driftndrive" },
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
});