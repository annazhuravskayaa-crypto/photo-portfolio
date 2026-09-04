const gallery = document.querySelector(".gallery");

projects.forEach(project => {
    const article = document.createElement("article");

    article.className = "work";

    article.innerHTML = `
        <div class="photo-frame">
            <img src="${project.cover}" alt="${project.title}">
        </div>

        <h2>${project.title}</h2>
        <p>${project.category} · ${project.year}</p>
    `;

    gallery.appendChild(article);
});