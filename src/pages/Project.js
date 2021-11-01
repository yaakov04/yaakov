const Project = () => {
    const view = `
        <section class="section-project entry">
            <h2>Nombre del proyecto</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam repellat delectus voluptate illo, alias exercitationem porro officiis at fugit repudiandae, provident accusamus odit veniam magnam neque ducimus earum unde quia.</p>
            <span><a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a><a href="#" target="_blank" rel="noopener noreferrer"><i class="fas fa-rocket"></i></a></span>
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