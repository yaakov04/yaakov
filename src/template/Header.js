const Header = () => {
    const view = `
        <h1><a href="/">&lt; Yaakov &#47;&gt;</a></h1>
        <figure class="profile_picture">
            <img src="assets/img/profile_picture.jpg" alt="Foto de perfil">
        </figure>
        <nav class="Nav">
            <div class="nav-background"></div>
            <ul class="nav-ul">
                <li>
                    <a href="/#">Inicio</a>
                    <div class="nav-link-line"></div>
                </li>
                <li>
                    <a href="#/portafolio/1">Portafolio</a>
                    <div class="nav-link-line"></div>
                </li>
            </ul>
        </nav>
    `;
    return view;
};

export default Header;