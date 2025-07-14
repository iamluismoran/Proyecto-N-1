window.onload = async function (){
    const API_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

    try {
        const res = await fetch (API_URL)
        const data = await res.json()

        const mainProject = data.find(p => p.uuid === "1")
        const others = data.filter(p => p.uuid !== "1").sort(() => 0.5 -  Math.random()).slice(0, 3);

        renderMainProject(mainProject)
        renderRecentProjects(others)
    } catch (error) {
        console.error("Error fetching projects:", error);
  }
};

function renderMainProject(project) {
    const container = document.getElementById("main-project")

    container.innerHTML = `
    <h2>${project.name}</h2>
    <p>${project.description}</p>
    <span>${project.completed_on}</span>
    <div class="project-img"><img src="${project.image}" alt="${project.name}" /></div>
    <p>${project.content}</p>
  `;
}

  function renderRecentProjects(projects) {
    const container = document.getElementById("recent-projects");

    container.innerHTML = projects.map(p =>`
    <div class="projects-card">
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <a href="#">Learn more</a>
    </div>
  `).join("");
}

