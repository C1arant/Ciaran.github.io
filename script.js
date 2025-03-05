const projects = {
    1: {
        title: "Game 1",
        video: "https://www.youtube.com/embed/VIDEO_ID_1",
        desc: "Full description of Game 1, built with Unity.",
        link: "https://link-to-demo-or-repo"
    },
    2: {
        title: "Game 2",
        video: "https://www.youtube.com/embed/VIDEO_ID_2",
        desc: "Full description of Game 2, made in Godot.",
        link: "https://link-to-demo-or-repo"
    }
    // Add entries for projects 3-6
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