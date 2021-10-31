import getHash from '../utils/getHash';
const Header = () => {
    const route = getHash();
    const hero = route === '/' ?
        `
            <div class="Hero">

            </div>
        ` :
        '';
    const view = `
    <div class="header-content">
        <div>
            <h1><a href="/">&lt; Yaakov &#47;&gt;</a></h1>
            <figure>
                <img src="img/profile_picture.jpg" alt="Foto de perfil">
            </figure>
        </div>
        ${hero}
    </div>
        
    `;
    return view;
}
export default Header;