import Header from '../template/Header';
import Error404 from '../pages/Error404';
import Home from "../pages/Home";
import Portafolio from '../pages/Portafolio';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/portafolio': Portafolio
}

const router = async() => {
    const header = null || document.querySelector('#header');
    const content = null || document.querySelector('#content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router;