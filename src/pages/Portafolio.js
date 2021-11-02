import projectsPerPage from "../utils/projectsPerPage";
import getHash from "../utils/getHash";
import allProjects from "../json/projects.json";

const Portafolio = () => {
        const resultsPerPage = 6;
        const currentPage = parseInt(getHash(2));
        const allPage = Math.round(allProjects.length / resultsPerPage);
        const previousPage = currentPage > 1 ? currentPage - 1 : 1;
        const nextPage = currentPage < allPage ? currentPage + 1 : allPage;
        const projects = projectsPerPage(allProjects, resultsPerPage, currentPage);

        const view = `
        <section class="entry section-portafolio">
            <h2>Portafolio</h2>
            <div class="portfolio-grid">

                ${projects.map(project=>`
                    <article>
                        <a href="#/proyecto/${project.id}">
                            <figure class="project">
                                <img src="${project.thumbnail}" alt="imagen del proyecto">
                                <figcaption>${project.nombre}</figcaption>
                            </figure>
                        </a>
                    </article>
                `).join('')}
               
            </div>
            <div class="pagination">
                <a href="#/portafolio/${previousPage}"><i class="fas fa-chevron-left"></i></a>
                <span>pagina ${currentPage} de ${allPage}</span>
                <a href="#/portafolio/${nextPage}"><i class="fas fa-chevron-right"></i></a>
            </div>
        </section>
    `;
    
    return view;
};

export default Portafolio;