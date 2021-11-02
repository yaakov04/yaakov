import allProjects from "../json/projects.json";
import getHash from "../utils/getHash";

const Project = () => {
        const idProject = parseInt(getHash(2));
        const project = allProjects.filter(project => project.id === idProject)[0];
        const view = `
        <section class="section-project entry">
            <h2>${project.nombre}</h2>
            <p>${project.descripcion}</p>
            <span><a href="${project.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>${project.deploy ? `<a href="${project.deploy}" target="_blank" rel="noopener noreferrer"><i class="fas fa-rocket"></i></a>`:''}</span>
            <div class="project-gallery">
                <figure>
                    <img src="https://i.imgur.com/ms2GRG4.png" alt="imagen de proyecto">
                </figure>
                <figure>
                    <img src="https://i.imgur.com/ms2GRG4.png" alt="imagen de proyecto">
                </figure>
            </div>

        </section>
    `;
    return view;
};

export default Project;