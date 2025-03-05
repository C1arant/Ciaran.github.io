const projects = {
    1: { 
        title: "Cosmo's Adventure", 
        video: "", 
        desc: "A chill 3D platformer.", 
        link: "https://ciarantdev.itch.io/cosmos-adventure-demo" // Replace with actual play/download link
    },
    2: { 
        title: "Cyber League", 
        video: "", 
        desc: "Fast-paced tactical shooter.", 
        link: "#" // Replace with actual play/download link
    },
    3: { 
        title: "Project Luna", 
        video: "https://youtu.be/qrkHyet6y5o", 
        desc: "Sci-fi adventure on Steam.", 
        link: "https://store.steampowered.com/app/1950760/Project_Luna/" // Replace with Steam or download link
    },
    4: { 
        title: "Robo Rob", 
        video: "https://youtu.be/fy6DlFiszWI", 
        desc: "Rage-inducing puzzle platformer on Steam.", 
        link: "https://store.steampowered.com/app/2291910/Robo_Rob/" // Replace with Steam or download link
    },
    5: { 
        title: "Silly Drifters", 
        video: "https://youtu.be/XK1AhpbhdwE", 
        desc: "A physics-based driving game.", 
        link: "https://ciarantdev.itch.io/sillydrifters" // Replace with actual play/download link
    },
    6: { 
        title: "Frontier Manager", 
        video: "https://youtu.be/adfmsK73c90", 
        desc: "An idle space sim.", 
        link: "https://ciarantdev.itch.io/satellite" // Replace with actual play/download link
    },
    7: { 
        title: "Pixel Dungeon", 
        video: "", 
        desc: "A retro-style dungeon crawler.", 
        link: "#" // Replace with actual play/download link
    },
    8: { 
        title: "Space Invaders", 
        video: "", 
        desc: "A modern take on a classic.", 
        link: "#" // Replace with actual play/download link
    },
    9: { 
        title: "Super Jump", 
        video: "", 
        desc: "A fast-paced platformer.", 
        link: "#" // Replace with actual play/download link
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