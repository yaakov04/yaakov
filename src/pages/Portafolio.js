import projectsPerPage from "../utils/projectsPerPage";
import getHash from "../utils/getHash";

const Portafolio = () => {
        const allProjects = [{
            'id': 1,
            'nombre': 'Proyecto 1'
        }, {
            'id': 2,
            'nombre': 'Proyecto 2'
        }, {
            'id': 3,
            'nombre': 'Proyecto 3'
        }, {
            'id': 4,
            'nombre': 'Proyecto 4'
        }, {
            'id': 5,
            'nombre': 'Proyecto 5'
        }, {
            'id': 6,
            'nombre': 'Proyecto 6'
        }, {
            'id': 7,
            'nombre': 'Proyecto 7'
        }, {
            'id': 8,
            'nombre': 'Proyecto 8'
        }, {
            'id': 9,
            'nombre': 'Proyecto 9'
        }, {
            'id': 10,
            'nombre': 'Proyecto 10'
        }, {
            'id': 11,
            'nombre': 'Proyecto 11'
        }, {
            'id': 12,
            'nombre': 'Proyecto 12'
        }, ];
        const resultsPerPage = 6;
        const currentPage = parseInt(getHash(2));
        const allPage = allProjects.length / resultsPerPage;
        const previousPage = currentPage > 1 ? currentPage - 1 : 1;
        const nextPage = currentPage < allPage ? currentPage + 1 : allPage;
        console.log(typeof(currentPage))
        console.log(nextPage);

        const projects = projectsPerPage(allProjects, resultsPerPage, currentPage);
        const view = `
        <section class="entry section-portafolio">
            <h2>Portafolio</h2>
            <div class="portfolio-grid">

                ${projects.map(project=>`
                    <article>
                        <a href="/#/proyecto/${project.id}">
                            <figure class="project">
                                <img src="https://i.imgur.com/1WRt5BH.png" alt="imagen del proyecto">
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