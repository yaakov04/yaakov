const Home = () => {
    const view = `
        <div class="section-inicio entry">

            <span class="curly-brace">&#123;</span>
            <div class="curly-brace-content">
                <div class="curly-brace-content-row">
                    <span class="key-blue">&#34;nombre:&#34;</span>
                    <span class="value-white">&#34;Diego Briones&#34;</span> ,
                </div>
                <div class="curly-brace-content-row">
                    <span class="key-blue">&#34;descripción:&#34;</span>
                    <span class="value-white">&#34;Soy un apasionado por la filosofía de la ciencia, la lógica, la programación y Linux. Mi meta es llegar a ser Backend Developer&#34;</span> ,
                </div>
                <div class="curly-brace-content-row">
                    <span class="key-blue">&#34;tecnologías:&#34;</span>
                    <span class="value-white">&#91;&#34;HTML&#34;, &#34;CSS&#34;, &#34;JavaScript&#34;, &#34;PHP&#34;, &#34;Laravel&#34;&#93;</span> ,
                </div>
                <div class="curly-brace-content-row">
                    <span class="key-blue">&#34;contacto:&#34;</span>
                    <span class="value-white">&#91;&#34;<a href="https://github.com/yaakov04" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Github</a>&#34;, &#34;<a href="https://www.linkedin.com/in/diego-b-7a6121206/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i> Linkedin</a>&#34;, &#34;<a href="mailto:dbrionesmtz@yahoo.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i> Email</a>&#34;&#93;</span>
                </div>
            </div>
            <span class="curly-brace">&#125;</span>

        </div>
    `;
    return view;
}

export default Home;