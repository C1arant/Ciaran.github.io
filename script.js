document.addEventListener("DOMContentLoaded", () => {
    // Project Data for Modal and Progress Sync
    const projects = {
        1: { video: "", desc: "A chill 3D platformer.", link: "https://ciarantdev.itch.io/cosmos-adventure-demo", progress: 10, github: "https://github.com/C1arant/Cosmos-Adventure" },
        2: { video: "", desc: "Fast-paced tactical shooter.", link: "#", progress: 60, github: "https://github.com/C1arant/Cyber-League" },
        3: { video: "https://www.youtube.com/embed/qrkHyet6y5o", desc: "Sci-fi adventure on Steam.", link: "https://store.steampowered.com/app/1950760/Project_Luna/", progress: 0, github: "https://github.com/C1arant/U.ProjectLuna" },
        4: { video: "https://www.youtube.com/embed/fy6DlFiszWI", desc: "Rage-inducing puzzle platformer on Steam.", link: "https://store.steampowered.com/app/2291910/Robo_Rob/", progress: 100, github: "https://github.com/C1arant/RoboRob" },
        5: { video: "https://www.youtube.com/embed/XK1AhpbhdwE", desc: "A physics-based driving game.", link: "https://ciarantdev.itch.io/sillydrifters", progress: 100, github: "https://github.com/C1arant/Silly-Drifters" },
        6: { video: "https://www.youtube.com/embed/adfmsK73c90", desc: "An idle space sim.", link: "https://ciarantdev.itch.io/satellite", progress: 100, github: "https://github.com/C1arant/U.FrontiereManager" },
        7: { video: "", desc: "A chill 3D adventure.", link: "#", progress: 0, github: "https://github.com/C1arant/Wild-Heart" },
        8: { video: "", desc: "A scifi co-op adventure.", link: "#", progress: 0, github: "https://github.com/C1arant/SpaceRPG" },
        9: { video: "", desc: "A fast-paced platformer.", link: "#", progress: 0, github: "https://github.com/C1arant/FPS" }
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

    // Add Last Updated Element to Modal
    const lastUpdated = document.createElement("p");
    lastUpdated.id = "modal-last-updated";
    lastUpdated.style.color = "#cccccc";
    projectModal.querySelector(".modal-content").insertBefore(lastUpdated, projectModalLink);

    document.querySelectorAll(".details-btn").forEach(btn => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault();
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

            // Fetch Last Updated from GitHub
            lastUpdated.textContent = "Last Updated: Loading...";
            if (project.github) {
                try {
                    const repoPath = project.github.replace("https://github.com/", "");
                    const response = await fetch(`https://api.github.com/repos/${repoPath}/commits`, {
                        headers: {
                            // Optional: Add GitHub token if rate-limited (uncomment and replace with your token)
                            // "Authorization": "token YOUR_PERSONAL_ACCESS_TOKEN"
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                    }
                    const commits = await response.json();
                    if (commits.length > 0) {
                        const lastCommitDate = new Date(commits[0].commit.author.date);
                        lastUpdated.textContent = `Last Updated: ${lastCommitDate.toLocaleDateString()}`;
                    } else {
                        lastUpdated.textContent = "Last Updated: No commits found";
                    }
                } catch (error) {
                    lastUpdated.textContent = "Last Updated: Unable to fetch";
                    console.error(`GitHub API error for ${project.github}:`, error.message);
                }
            } else {
                lastUpdated.textContent = "Last Updated: No GitHub repo";
            }

            projectModal.style.display = "block";
        });
    });

    projectCloseBtn.addEventListener("click", () => {
        projectModal.style.display = "none";
        projectModalVideo.src = "";
        projectModalComingSoon.style.display = "none";
        projectModalIcons.innerHTML = "";
        lastUpdated.textContent = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = "none";
            projectModalVideo.src = "";
            projectModalComingSoon.style.display = "none";
            projectModalIcons.innerHTML = "";
            lastUpdated.textContent = "";
        }
    });

    // Badge Modal Logic (Updated to match your latest HTML)
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