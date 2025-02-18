import {HeaderOnly} from '../components/Layout';

import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Uploads';
import Search from '../pages/Search';
//Khong can dang nhap
const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload , layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },

];
//Can dang nhap
const privateRoutes = [

];
export { publicRoutes, privateRoutes}