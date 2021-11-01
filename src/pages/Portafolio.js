const Portafolio = () => {
    const view = `
        <section class="entry section-portafolio">
            <h2>Portafolio</h2>
            <div class="portfolio-grid">
                <article>
                    <a href="/#/proyecto/1">
                        <figure class="project">
                            <img src="https://i.imgur.com/1WRt5BH.png" alt="imagen del proyecto">
                            <figcaption>Nombre del proyecto</figcaption>
                        </figure>
                    </a>
                </article>
                <article>
                    <a href="/#/proyecto/2">
                        <figure class="project">
                            <img src="https://i.imgur.com/1WRt5BH.png" alt="imagen del proyecto">
                            <figcaption>Nombre del proyecto</figcaption>
                        </figure>
                    </a>
                </article>
                <article>
                    <a href="/#/proyecto/3">
                        <figure class="project">
                            <img src="https://i.imgur.com/1WRt5BH.png" alt="imagen del proyecto">
                            <figcaption>Nombre del proyecto</figcaption>
                        </figure>
                    </a>
                </article>
                <article>
                    <a href="/#/proyecto/4">
                        <figure class="project">
                            <img src="https://i.imgur.com/1WRt5BH.png" alt="imagen del proyecto">
                            <figcaption>Nombre del proyecto</figcaption>
                        </figure>
                    </a>
                </article>
                <article>
                    <a href="/#/proyecto/5">
                        <figure class="project">
                            <img src="https://i.imgur.com/1WRt5BH.png" alt="imagen del proyecto">
                            <figcaption>Nombre del proyecto</figcaption>
                        </figure>
                    </a>
                </article>
                <article>
                    <a href="/#/proyecto/6">
                        <figure class="project">
                            <img src="https://i.imgur.com/1WRt5BH.png" alt="imagen del proyecto">
                            <figcaption>Nombre del proyecto</figcaption>
                        </figure>
                    </a>
                </article>

            </div>
            <div class="pagination">
                <button><i class="fas fa-chevron-left"></i></button>
                <button><i class="fas fa-chevron-right"></i></button>
            </div>
        </section>
    `;
    return view;
};

export default Portafolio;