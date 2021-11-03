import Header from '../template/Header';
import MobileMenu from '../template/MobileMenu';
import Error404 from '../pages/Error404';
import Home from "../pages/Home";
import Portafolio from '../pages/Portafolio';
import Project from "../pages/Project"
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/portafolio': Portafolio,
    '/proyecto': Project
}

const router = async() => {
    const header = null || document.querySelector('#header');
    const content = null || document.querySelector('#content');
    const mobileMenu = null || document.querySelector('.Mobile-menu');

    header.innerHTML = await Header();
    mobileMenu.innerHTML = await MobileMenu();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;